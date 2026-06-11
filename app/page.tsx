'use client';

import React, { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [material, setMaterial] = useState('PET');
  const [weight, setWeight] = useState('');
  const [co2Result, setCo2Result] = useState<string | null>(null);

  const calculateCO2 = () => {
    const w = parseFloat(weight) || 0;
    const factors: Record<string, number> = {
      PET: 2.7,
      HDPE: 2.5,
      Aluminum: 8.0,
      Glass: 0.6,
      Paper: 0.9,
    };
    const result = w * (factors[material] || 2.0);
    setCo2Result(`${result.toFixed(1)} кг CO₂`);
  };

  const stats = [
    { value: '0', label: 'кг CO₂ хэмнэсэн' },
    { value: '0', label: 'Идэвхтэй хэрэглэгч' },
    { value: '0', label: 'Тарьсан мод' },
  ];

  const steps = [
    { num: 1, title: 'Материал бүртгүүл', desc: 'Дахин боловсруулах материалаа зурагтаа бүртгүүл.' },
    { num: 2, title: 'Pickup хүсэлт', desc: 'Газрын зураг дээр хог цэвэрлүүлэх хүсэлт илгээ.' },
    { num: 3, title: 'Цуглуулалт', desc: 'Жолооч ирж хогийг тань авч явна.' },
    { num: 4, title: 'Нөлөө харах', desc: 'CO₂ хэмнэлт, эко оноо, badge — бүгдийг харах.' },
  ];

  const trackingSteps = ['АВАЛТ', 'ТЭЭВЭР', 'БОЛОВСРУУЛАГТ', 'БҮТЭЭГДЭХҮҮН', 'БОРЛУУЛАГТ'];

  const leaderboard = [
    { name: 'Б.Батэрдэнэ', level: 'Eco Legend', co2: '1250 кг', rank: 1 },
    { name: 'Г.Сарантуяа', level: 'Eco Hero', co2: '980 кг', rank: 2 },
    { name: 'Д.Ганболд', level: 'Eco Hero', co2: '756 кг', rank: 3 },
    { name: 'М.Энхтуул', level: 'Eco Advocate', co2: '620 кг', rank: 4 },
  ];

  const features = [
    { title: 'CO₂ Тооцоолуур', desc: 'Материал төрөл, жингээ оруулаад хэдэн кг CO₂ хэмнэснээ хараарай', icon: '📊' },
    { title: 'Pickup Tracking', desc: 'Газрын зураг дээр хог цэвэрлүүлэх хүсэлт илгээж, жолоочийн маршрут хяна', icon: '🚛' },
    { title: 'Eco Rewards', desc: 'Байгальд ээлтэй үйл ажиллагааны урамшуулал, badge, оноо цуглуул', icon: '🏆' },
    { title: 'ESG Dashboard', desc: 'Тогтвортой хөгжлийн тайлан, аналитик, CO₂ нөлөө харах', icon: '📈' },
  ];

  return (
    <>
      <Head>
        <title>GreenLoop AI — Дахин боловсруулалтын ирээдүй</title>
        <meta name="description" content="Монголын анхны AI-driven дахин боловсруулалтын систем" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header / Navigation */}
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-green-700">🌿 GreenLoop AI</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#calculator" className="text-gray-600 hover:text-green-600 transition">Тооцоолуур</a>
                <a href="#process" className="text-gray-600 hover:text-green-600 transition">Процесс</a>
                <a href="#tracking" className="text-gray-600 hover:text-green-600 transition">Tracking</a>
                <a href="#leaderboard" className="text-gray-600 hover:text-green-600 transition">Тэргүүлэгчид</a>
              </nav>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                Эхлэх
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-green-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-4">
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                🌿 Монголын анхны AI-driven дахин боловсруулалтын систем
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              GreenLoop AI-тай хамт бүх дахин<br />
              боловсруулалтыг хэмжигдэхүйц,<br />
              хянагдахуйц, урамшуулалтай болгоё.
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-6 border border-green-100">
                  <div className="text-4xl font-bold text-green-600">{stat.value}</div>
                  <div className="text-gray-600 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CO₂ Calculator */}
        <section id="calculator" className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">CO₂ Тооцоолуур</h2>
              <p className="text-gray-600">Дахин боловсруулалтын CO₂ тооцоолуур</p>
              <p className="text-gray-500 text-sm mt-2">Материал төрөл, жингээ оруулаад хэдэн кг CO₂ хэмнэснээ хараарай</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Материал төрөл</label>
                  <select
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="PET">PET (Plastic bottle)</option>
                    <option value="HDPE">HDPE (Hard plastic)</option>
                    <option value="Aluminum">Aluminum</option>
                    <option value="Glass">Glass</option>
                    <option value="Paper">Paper</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Жин (кг)</label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
              <button
                onClick={calculateCO2}
                className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Материал сонгон тооцоолох товчийг дарна уу
              </button>
              {co2Result && (
                <div className="mt-6 text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-700">{co2Result}</div>
                  <div className="text-green-600">CO₂ хэмнэлт</div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Боломжууд</h2>
              <p className="text-gray-600">Ногоон платформ ба боломж</p>
              <p className="text-gray-500 text-sm mt-2">Дахин боловсруулалтын бүтэн экосистемийг нэг дор хяна.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="process" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Хэрхэн ажилладаг</h2>
              <p className="text-gray-600">Процесс</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step) => (
                <div key={step.num} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {step.num}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                  {step.num < 4 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-0.5 bg-green-300"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5-Step Tracking */}
        <section id="tracking" className="py-20 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">5 Шатны Tracking</h2>
              <p className="text-gray-600">Бүтэн мөчлөр хяналт</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {trackingSteps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="bg-white rounded-xl p-6 shadow-md border border-green-200 text-center min-w-[140px]">
                    <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2">
                      {idx + 1}
                    </div>
                    <div className="text-sm font-semibold text-gray-800">{step}</div>
                  </div>
                  {idx < trackingSteps.length - 1 && (
                    <div className="text-green-400 text-2xl">→</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Газрын зураг</h2>
              <p className="text-gray-600">Дахин боловсруулах төвүүд</p>
              <p className="text-gray-500 text-sm mt-2">Хамгийн ойр төв хайж, хог хаягдлаа хүргэх</p>
            </div>
            <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center border border-gray-200">
              <div className="text-center">
                <div className="text-4xl mb-4">🗺️</div>
                <p className="text-gray-600">Газрын зураг ачаалж байна...</p>
                <p className="text-gray-400 text-sm mt-2">Google Maps integration</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leaderboard */}
        <section id="leaderboard" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Тэргүүлэгчид</h2>
              <p className="text-gray-600">Leaderboard</p>
              <p className="text-gray-500 text-sm mt-2">Хамгийн их CO₂ хэмнэсэн хэрэглэгчид</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              {leaderboard.map((user, idx) => (
                <div
                  key={idx}
                  className={`flex items-center p-6 ${idx !== leaderboard.length - 1 ? 'border-b border-gray-100' : ''} hover:bg-gray-50 transition`}
                >
                  <div className="w-12 text-center">
                    <span className={`text-lg font-bold ${idx < 3 ? 'text-green-600' : 'text-gray-400'}`}>
                      {user.rank}
                    </span>
                  </div>
                  <div className="w-12 mx-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-lg">
                      {idx % 2 === 0 ? '👨' : '👩'}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{user.name}</div>
                    <div className="text-sm text-green-600">{user.level}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">{user.co2}</div>
                    <div className="text-sm text-gray-500">CO₂ хэмнэсэн</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-bold mb-4">🌿 GreenLoop AI</div>
                <p className="text-gray-400">Монголын анхны AI-driven дахин боловсруулалтын систем</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Холбоосууд</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition">Нүүр хуудас</a></li>
                  <li><a href="#" className="hover:text-white transition">Тооцоолуур</a></li>
                  <li><a href="#" className="hover:text-white transition">Тэргүүлэгчид</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Холбоо барих</h3>
                <p className="text-gray-400">info@greenloop.mn</p>
                <p className="text-gray-400">+976 99-99-9999</p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
              © 2025 GreenLoop AI. Бүх эрх хуулиар хамгаалагдсан.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
