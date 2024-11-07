import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

// Add translations object
const translations = {
  en: {
    title: "Shopify Theme Development Services",
    hero: {
      heading: "Custom Shopify Theme Development",
      subheading: "Transform your online store with a professional, custom-built Shopify theme",
      cta: "Get Started"
    },
    services: {
      heading: "Our Services",
      items: [
        {
          title: "Custom Theme Development",
          description: "Unique, made-to-order Shopify themes that perfectly match your brand identity"
        },
        {
          title: "Theme Customization",
          description: "Modify existing themes to enhance functionality and user experience"
        },
        {
          title: "Performance Optimization",
          description: "Speed up your store and improve conversion rates with optimized code"
        }
      ]
    },
    cta: {
      heading: "Ready to Transform Your Store?",
      subheading: "Let's create a stunning Shopify experience together",
      button: "Contact Us"
    }
  },
  es: {
    title: "Servicios de Desarrollo de Temas Shopify",
    hero: {
      heading: "Desarrollo de Temas Personalizados para Shopify",
      subheading: "Transforma tu tienda en línea con un tema Shopify profesional y personalizado",
      cta: "Comenzar"
    },
    services: {
      heading: "Nuestros Servicios",
      items: [
        {
          title: "Desarrollo de Temas Personalizados",
          description: "Temas Shopify únicos y hechos a medida que coinciden perfectamente con la identidad de tu marca"
        },
        {
          title: "Personalización de Temas",
          description: "Modificación de temas existentes para mejorar la funcionalidad y experiencia del usuario"
        },
        {
          title: "Optimización de Rendimiento",
          description: "Acelera tu tienda y mejora las tasas de conversión con código optimizado"
        }
      ]
    },
    cta: {
      heading: "¿Listo para Transformar tu Tienda?",
      subheading: "Creemos juntos una experiencia Shopify increíble",
      button: "Contáctanos"
    }
  }
}

export default function ShopifyServices() {
  const [lang, setLang] = useState('en')

  useEffect(() => {
    // Check browser language
    const browserLang = navigator.language.split('-')[0]
    setLang(browserLang === 'es' ? 'es' : 'en')
  }, [])

  const t = translations[lang]

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.hero.subheading} />
      </Head>

      {/* Hero Section - Updated with Shopify-like styling */}
      <section className="bg-[#004C3F] text-white py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            {t.hero.heading}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl opacity-90">
            {t.hero.subheading}
          </p>
          <Link href="/contact" className="bg-[#008060] text-white px-8 py-4 rounded text-lg font-medium hover:bg-[#006e52] transition-colors inline-block">
            {t.hero.cta}
          </Link>
        </div>
      </section>

      {/* Services Section - Updated with Shopify-like cards */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-[#004C3F] text-4xl font-bold text-center mb-16">{t.services.heading}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.services.items.map((service, index) => (
              <div key={index} className="p-8 rounded-2xl bg-[#F3FCF4] hover:bg-[#E3F1E4] transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-[#004C3F]">{service.title}</h3>
                <p className="text-[#6B7177] text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Updated with Shopify-like styling */}
      <section className="bg-[#F3FCF4] py-24">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#004C3F]">{t.cta.heading}</h2>
          <p className="text-xl mb-8 text-[#6B7177] max-w-2xl mx-auto">{t.cta.subheading}</p>
          <Link href="/contact" className="bg-[#008060] text-white px-8 py-4 rounded text-lg font-medium hover:bg-[#006e52] transition-colors inline-block">
            {t.cta.button}
          </Link>
        </div>
      </section>
    </div>
  )
}
