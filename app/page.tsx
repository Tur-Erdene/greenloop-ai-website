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

      <div className="min-h-screen bg-slate-900">
        {/* Header / Navigation */}
        <header className="bg-slate-900/80 backdrop-blur border-b border-slate-700 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-emerald-400">🌿 GreenLoop AI</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#calculator" className="text-slate-300 hover:text-emerald-400 transition">Тооцоолуур</a>
                <a href="#process" className="text-slate-300 hover:text-emerald-400 transition">Процесс</a>
                <a href="#tracking" className="text-slate-300 hover:text-emerald-400 transition">Tracking</a>
                <a href="#register" className="text-slate-300 hover:text-emerald-400 transition">Бүртгүүлэх</a>
              <a href="#guide" className="text-slate-300 hover:text-emerald-400 transition">Гарын авлага</a>
              <a href="#leaderboard" className="text-slate-300 hover:text-emerald-400 transition">Тэргүүлэгчид</a>
              </nav>
              <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition">
                Бүртгүүлэх
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-4">
              <span className="inline-block bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium border border-emerald-500/30">
                🌿 Монголын анхны AI-driven дахин боловсруулалтын систем
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              🌿 Ногоон Хот
            </h1>
            <p className="text-xl text-emerald-400 mb-2 font-medium">
              хамтдаа бүтээе
            </p>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Дахин боловсруулалтыг хялбар, урамшуулалтай, хэмжигдэхүйц болгоё
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold transition shadow-lg shadow-emerald-500/25">
                🚀 CO₂ нөлөө тооцоолох
              </button>
              <button className="border border-slate-400 text-white hover:bg-slate-700 px-8 py-4 rounded-xl font-semibold transition">
                📖 Гарын авлага
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700">
                  <div className="text-4xl font-bold text-emerald-400">{stat.value}</div>
                  <div className="text-slate-300 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CO₂ Calculator */}
        <section id="calculator" className="py-20 bg-green-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                📊 Калькулятор
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">CO₂ Тооцоолуур</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Материал төрөл, жингээ оруулаад хэдэн кг CO₂ хэмнэснээ мэдэж, экологийн нөлөөгөө хар.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">🧮 Тооцоолох</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Материал сонгох</label>
                    <select
                      value={material}
                      onChange={(e) => setMaterial(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                    >
                      <option value="PET">🥤 PET лонх (Plastic bottle)</option>
                      <option value="HDPE">🧴 HDPE сав (Hard plastic)</option>
                      <option value="Aluminum">🥫 Aluminum хөнгөн цагаан</option>
                      <option value="Glass">🍾 Glass шил</option>
                      <option value="Paper">📄 Paper цаас</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Жин (кг)</label>
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="Жишээ: 2.5"
                      step="0.1"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">1 кг = 1000 грамм. Жишээ: 2 кг PET лонх ≈ 67 ширхэг 500мл лонх</p>
                  </div>
                  <button
                    onClick={calculateCO2}
                    className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition shadow-md"
                  >
                    🧮 Тооцоолох
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">📊 Үр дүн</h3>
                {co2Result ? (
                  <div className="space-y-4">
                    <div className="p-6 bg-green-50 rounded-lg border border-green-200 text-center">
                      <div className="text-sm text-green-600 mb-1">Таны хэмнэсэн CO₂</div>
                      <div className="text-4xl font-bold text-green-700">{co2Result}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 text-center">
                        <div className="text-2xl">🌳</div>
                        <div className="text-sm font-semibold text-blue-700">{(parseFloat(weight || '0') * 0.05).toFixed(1)} мод</div>
                        <div className="text-xs text-blue-600">1 жилд тэнцэх</div>
                      </div>
                      <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100 text-center">
                        <div className="text-2xl">⚡</div>
                        <div className="text-sm font-semibold text-yellow-700">{(parseFloat(weight || '0') * 1.2).toFixed(1)} кВт</div>
                        <div className="text-xs text-yellow-600">Цахилгаан хэмнэлт</div>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="text-sm font-medium text-gray-700 mb-2">🌍 Эквивалент нөлөө:</div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>🚗 {(parseFloat(weight || '0') * 4.5).toFixed(1)} км машин явсантай тэнцэх</li>
                        <li>💡 {(parseFloat(weight || '0') * 50).toFixed(0)} цаг LED гэрэл асаасантай тэнцэх</li>
                        <li>📱 {(parseFloat(weight || '0') * 200).toFixed(0)} удаа гар утас цэнэглэсэнтэй тэнцэх</li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="text-4xl mb-2">🧮</div>
                      <p>Материал болон жингээ оруулна уу</p>
                    </div>
                  </div>
                )}
              </div>
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
              <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                🏆 Тэргүүлэгчид
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Leaderboard</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Хамгийн их CO₂ хэмнэсэн хэрэглэгчид. Та ч бас энэ жагсаалтад багтаж болно!
              </p>
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

        {/* Гарын авлага / Guide */}
        <section id="guide" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                📖 Гарын авлага
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Хэрхэн ашиглах вэ?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                GreenLoop AI-г ашиглахад тань туслах дэлгэрэнгүй гарын авлага
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-xl mb-4">📝</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Бүртгэл үүсгэх</h3>
                <p className="text-gray-600 text-sm">
                  И-мэйл эсвэл Google акаунтаар хурдан бүртгүүл. Профайлдаа eco зорилгоо тав.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl mb-4">📸</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Материал бүртгүүлэх</h3>
                <p className="text-gray-600 text-sm">
                  Дахин боловсруулах материалаа зурагтаа, жингээ оруул. AI автоматаар төрөл таньж, CO₂ хэмнэлт тооцно.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-xl mb-4">🗺️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Pickup захиалах</h3>
                <p className="text-gray-600 text-sm">
                  Газрын зураг дээр хаягээ сонго, жолооч хэзээ ирэхийг хара. Real-time tracking хий.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-xl mb-4">🏅</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Оноо цуглуулах</h3>
                <p className="text-gray-600 text-sm">
                  Бүртгэл бүрт eco оноо ав. Badge, level-up, leaderboard-д эрэмбэлүүл.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-xl mb-4">🌳</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Мод тарих</h3>
                <p className="text-gray-600 text-sm">
                  Оноогоо мод тарих хандив болгон хөрвүүл. GPS-ээр тартсан модны байршлыг хара.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-xl mb-4">📊</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Тайлан харах</h3>
                <p className="text-gray-600 text-sm">
                  ESG dashboard-аас нийт CO₂ хэмнэлт, хүлээн авсан материал, нөлөөг хара.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-green-50 rounded-xl p-8 border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-4">💡 Зөвлөмж</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Материалаа цэвэрлэж, ангилж бүртгүүлэх нь оноо илүү өгнө</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>7 хоног бүр бүртгэл хийвэл streak bonus оноо авна</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Найзаа урихад хоёул оноо бонус авна</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Бүлүүр (bulk) бүртгэл хийвэл илүү оноо</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>CSR компани оноогоо илүү хурдан цуглуулна</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Эко түвшин 1000кг CO₂ хэмнэснээр Eco Legend болно</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Бүртгүүлэх / Register */}
        <section id="register" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                🚀 Эхлэх
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Бүртгүүлэх</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                GreenLoop AI-д нэгдэж, дахин боловсруулалтаа эхлүүл. CO₂ хэмнэлтээ хянаж, оноо цуглуул.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Registration Form */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">📝 Шинээр бүртгүүлэх</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Нэр</label>
                    <input
                      type="text"
                      placeholder="Таны нэр"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">И-мэйл</label>
                    <input
                      type="email"
                      placeholder="example@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Утас</label>
                    <input
                      type="tel"
                      placeholder="+976 99-99-9999"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Хэрэглэгчийн төрөл</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white">
                      <option>🏠 Хувь хүн</option>
                      <option>🏢 CSR Компани</option>
                      <option>♻️ Дахин боловсруулах төв</option>
                    </select>
                  </div>
                  <button
                    type="button"
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow-md"
                  >
                    ✅ Бүртгүүлэх
                  </button>
                </form>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  Бүртгүүлснээр та манай үйлчилгээний нөхцөлийг зөвшөөрч байна.
                </p>
              </div>

              {/* AI Advisor */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">🤖 AI Зөвлөх</h3>
                <div className="bg-green-50 rounded-lg p-4 mb-4 border border-green-200">
                  <p className="text-green-800 text-sm">
                    <span className="font-semibold">🌿 Сайн байна уу!</span><br />
                    Би GreenLoop AI-ийн экологийн зөвлөх. Дахин боловсруулалт, CO₂ хэмнэлт, тогтвортой хөгжилтэй холбоотой асуултад хариулахад бэлэн.
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-gray-600 font-medium">Санал болгох асуултууд:</p>
                  <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-green-50 hover:text-green-700 transition text-sm text-gray-700 border border-gray-200">
                    🧴 PET лонх хэрхэн дахин боловсруулагддаг вэ?
                  </button>
                  <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-green-50 hover:text-green-700 transition text-sm text-gray-700 border border-gray-200">
                    📊 1 кг хуванцар хэдэн кг CO₂ хэмнэдэг вэ?
                  </button>
                  <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-green-50 hover:text-green-700 transition text-sm text-gray-700 border border-gray-200">
                    🏆 Eco Legend түвшинд хүрэхэд хэдэн оноо хэрэгтэй вэ?
                  </button>
                  <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-green-50 hover:text-green-700 transition text-sm text-gray-700 border border-gray-200">
                    🌳 Мод тарих хандив хэрхэн хийх вэ?
                  </button>
                </div>
                <div className="mt-4 flex gap-2">
                  <input
                    type="text"
                    placeholder="Асуултаа бичнэ үү..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  />
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                    📤
                  </button>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100">
                <div className="text-3xl mb-3">🎁</div>
                <h4 className="font-semibold text-gray-900 mb-2">Бүртгүүлээд 100 оноо аваарай</h4>
                <p className="text-sm text-gray-600">Шинэ хэрэглэгч бүрт 100 eco оноо бэлэглэнэ.</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100">
                <div className="text-3xl mb-3">📱</div>
                <h4 className="font-semibold text-gray-900 mb-2">Мобайл апп ирэхэд мэдэгдэл авана</h4>
                <p className="text-sm text-gray-600">iOS болон Android апп удахгүй гарч байна.</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100">
                <div className="text-3xl mb-3">🤝</div>
                <h4 className="font-semibold text-gray-900 mb-2">Найзаа урихад хоёул оноо аваарай</h4>
                <p className="text-sm text-gray-600">Найзаа урихад 50 оноо, найз чинь 50 оноо авна.</p>
              </div>
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
