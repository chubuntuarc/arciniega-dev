"use client";

import { useState, useEffect, useMemo } from "react";
import CurrencyTabs from "./components/currency-tabs";
import CurrencyBanner from "./components/currency-banner";
import styles from "./page.module.css";
import { pairData, pairsCatalogueData } from "./utils/pairs";
import historicDataByDay from "./utils/historic-data";
import webSocketClient from "./utils/websocket";
import Table from "./components/table";
import Graph from "./components/graph";

export default function Home() {
  const [activeTab, setActiveTab] = useState("");
  const [pairs_tabs, setPairsTabs] = useState([]);
  const [pair_data, setPairData] = useState(null);
  const socket = useMemo(() => webSocketClient(), []);
  const [socket_data, setSocketData] = useState(null);
  const [historic_data_by_day, setHistoricDataByDay] = useState([]);

  useEffect(() => {
    pairsCatalogueData().then((data) => {
      setPairsTabs(data);
      if (data && data.length > 0 && !activeTab) {
        setActiveTab(data[0]?.id || "");
      }
    });

    if (socket) {
      const messageHandler = (event) => {
        const data = JSON.parse(event.data);
        setSocketData(data);
      };
      socket.onmessage = messageHandler;

      return () => {
        socket.onmessage = null;
      };
    }
  }, [socket, activeTab]);

  useEffect(() => {
    if (activeTab) {
      pairData(activeTab).then((data) => {
        setPairData(data);
      });

      historicDataByDay(activeTab).then((data) => {
        setHistoricDataByDay(data);
      });
    }
  }, [activeTab]);

  useEffect(() => {
    if (pair_data && socket_data?.pair === activeTab) {
      if (pair_data.currentRate !== socket_data.point) {
        setPairData(prevData => ({
          ...prevData,
          currentRate: socket_data.point,
        }));
      }
    }
  }, [socket_data, activeTab, pair_data]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <CurrencyTabs
          pairs={pairs_tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <div>
          {pair_data &&
            historic_data_by_day &&
            historic_data_by_day.length > 0 ? (
            <div>
              <CurrencyBanner pair_data={pair_data} />
              <div className={styles.tablesWrapper}>
                <Table
                  title="Historic Prices"
                  data={historic_data_by_day.map((item) => ({
                    date: new Date(item.date)
                      .toLocaleDateString("en-US", {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                      })
                      .replace(/(\w{3}) (\d{2}), (\d{4})/, "$1-$2-$3"),
                    high: item.high.toFixed(2),
                    low: item.low.toFixed(2),
                  }))}
                />
                <Table
                  title="Daily Trend"
                  data={historic_data_by_day.map((item) => ({
                    date: new Date(item.date)
                      .toLocaleDateString("en-US", {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                      })
                      .replace(/(\w{3}) (\d{2}), (\d{4})/, "$1-$2-$3"),
                    open: item.open.toFixed(2),
                    close: item.close.toFixed(2),
                    difference: (item.close - item.open).toFixed(2),
                  }))}
                />
              </div>
              <Graph
                data={historic_data_by_day}
                current_rate={pair_data.currentRate}
              />
            </div>
          ) : (
            <div className={styles.noData}>
              {!activeTab ? "Select a currency pair" : "Loading data..."}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
