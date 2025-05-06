"use client";

import { useState, useEffect, useMemo } from "react";
import CurrencyTabs from "../../../components/currency-tabs";
import CurrencyBanner from "../../../components/currency-banner";
import styles from "./page.module.css";
import { pairData, pairsCatalogueData } from "../../../utils/pairs";
import historicDataByDay from "../../../utils/historic-data";
import webSocketClient from "../../../utils/websocket";
import Table from "../../../components/table";
import Graph from "../../../components/graph";
import Head from "next/head";
import Modal from "../../../components/Modal";

export default function Home() {
  const [activeTab, setActiveTab] = useState("");
  const [pairs_tabs, setPairsTabs] = useState([]);
  const [pair_data, setPairData] = useState(null);
  const socket = useMemo(() => webSocketClient(), []);
  const [socket_data, setSocketData] = useState(null);
  const [historic_data_by_day, setHistoricDataByDay] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <>
      <Head>
        <title>Trends Project</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
    <div className={styles.container}>
      <div className={styles.content}>
        <CurrencyTabs
          pairs={pairs_tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <button onClick={() => setIsModalOpen(true)} className={styles.detailsButton}>
          Project Details
        </button>
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
    <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Project Details: Currency Trends Dashboard"
        repo_url="https://github.com/chubuntuarc/front-end-challenge"
        year="2025"
        content={
            <>
              <p>
                  This project is a dynamic dashboard displaying real-time and historical currency pair exchange rates.
                  It fetches data from simulated APIs and uses WebSockets for live updates.
              </p>
              <br />
              <div>
                <hr style={{ border: '1px solid #ddd', width: '100%' }} />
                <br />
                <h4>Technologies Used:</h4>
                <p>Next.js (React Framework)</p>
                <p>React (with Hooks: useState, useEffect, useMemo)</p>
                <p>JavaScript (ES6+)</p>
                <p>WebSockets (for real-time data)</p>
                <p>Chart.js (via react-chartjs-2 for graph)</p>
                <p>CSS Modules (for styling)</p>
                <p>HTML5</p>
                <br />
                <h4>Main Features:</h4>
                <p>Tab-based navigation for different currency pairs.</p>
                <p>Real-time exchange rate updates via WebSocket.</p>
                <p>Display of historical data (high, low, open, close) in tables.</p>
                <p>Interactive graph visualizing historical price trends.</p>
                <p>Asynchronous data fetching for pair details and history.</p>
                <p>Responsive layout elements.</p>
                <br />
                <h4>Challenges and Learnings:</h4>
                <p>
                  Managing WebSocket connections effectively within React&apos;s lifecycle using `useEffect` and `useMemo`. Handling multiple asynchronous data streams (initial pair data, historical data, WebSocket updates) and ensuring state consistency. Structuring data appropriately for both tabular display and chart visualization. Implementing client-side routing and state management for the active currency pair.
                </p>
              </div>
            </>
        }
    />
    </>
  );
}
