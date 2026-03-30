import Icon from "@/components/ui/icon";

const HERO_IMAGE =
  "https://cdn.poehali.dev/projects/ca025900-3513-4875-8473-c89058b35ebd/files/85d2b4d1-a3f0-46c1-b772-5556cd3e4ac1.jpg";

const advantages = [
  {
    icon: "Trophy",
    title: "Только оригинал",
    desc: "Работаем с проверенными брендами и официальными дистрибьюторами. Никакого контрафакта.",
  },
  {
    icon: "Users",
    title: "Экспертный совет",
    desc: "Наши продавцы — сами спортсмены. Подберём снаряжение под ваши цели и уровень.",
  },
  {
    icon: "BadgeCheck",
    title: "Гарантия на всё",
    desc: "Официальная гарантия производителя. Обмен и возврат без лишних вопросов.",
  },
  {
    icon: "Layers",
    title: "Огромный выбор",
    desc: "Более 15 000 товаров: велосипеды, тренажёры, одежда, обувь, дайвинг и сапборды.",
  },
];

const deliveryOptions = [
  {
    icon: "MapPin",
    label: "Самовывоз",
    desc: "г. Керчь, ул. Ленина, 36\nпн–сб: 9:00–19:00\nвс: 10:00–17:00",
    accent: false,
  },
  {
    icon: "Truck",
    label: "Доставка по Керчи",
    desc: "Привезём в день заказа или на следующий. Бесплатно при заказе от 3 000 ₽.",
    accent: true,
  },
  {
    icon: "Package",
    label: "Доставка по Крыму",
    desc: "Курьером СДЭК или Почтой России. Срок — 1–3 дня. Отслеживание посылки.",
    accent: false,
  },
];

export default function Index() {
  return (
    <div className="min-h-screen font-golos" style={{ background: "#0e0e0e", color: "#f0f0f0" }}>

      {/* CSS переменные */}
      <style>{`
        :root {
          --accent: #ff5000;
          --bg-deep: #0e0e0e;
          --bg-section: #151515;
          --text-main: #f0f0f0;
        }
      `}</style>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,10,10,0.93) 0%, rgba(10,10,10,0.75) 55%, rgba(10,10,10,0.55) 100%)",
          }}
        />
        <div className="absolute top-0 left-0 w-1.5 h-full" style={{ background: "#ff5000" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-oswald tracking-widest uppercase"
            style={{
              background: "rgba(255,80,0,0.12)",
              border: "1px solid rgba(255,80,0,0.4)",
              color: "#ff5000",
            }}
          >
            <Icon name="MapPin" size={14} />
            Спортивный магазин в Керчи
          </div>

          <h1
            className="font-oswald font-bold uppercase leading-none mb-6 animate-fade-up"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)", color: "#fff", letterSpacing: "-0.02em" }}
          >
            АДРЕНАЛИН —<br />
            <span style={{ color: "#ff5000" }}>ТВОЙ СПОРТ</span>
          </h1>

          <p
            className="text-xl mb-10 max-w-xl leading-relaxed animate-fade-up"
            style={{ color: "rgba(255,255,255,0.72)", animationDelay: "0.15s", opacity: 0 }}
          >
            Снаряжение, одежда и велосипеды для настоящих спортсменов.
            Более 15 000 товаров. Доставка по Керчи и всему Крыму.
          </p>

          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            <a
              href="https://adrenalin-kerch.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 font-oswald uppercase tracking-wider text-lg font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
              style={{ background: "#ff5000", color: "#fff" }}
            >
              Перейти в магазин
              <Icon name="ArrowRight" size={20} />
            </a>
            <a
              href="tel:+79785039041"
              className="inline-flex items-center gap-3 px-8 py-4 font-oswald uppercase tracking-wider text-lg transition-all duration-200 hover:scale-105"
              style={{ border: "2px solid rgba(255,255,255,0.3)", color: "#fff", background: "transparent" }}
            >
              <Icon name="Phone" size={18} />
              Позвонить
            </a>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
          style={{ color: "rgba(255,255,255,0.35)", animationDelay: "1s", opacity: 0 }}
        >
          <span className="text-xs font-oswald uppercase tracking-widest">Листай вниз</span>
          <Icon name="ChevronDown" size={20} />
        </div>
      </section>

      {/* ─── КП ─── */}
      <section className="py-20 px-6" style={{ background: "#151515" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-oswald uppercase tracking-widest mb-4" style={{ color: "#ff5000" }}>
                Почему выбирают нас
              </div>
              <h2
                className="font-oswald uppercase leading-tight mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#fff", letterSpacing: "-0.01em" }}
              >
                ВСЁ ДЛЯ СПОРТА —<br />
                <span style={{ color: "#ff5000" }}>В ОДНОМ МЕСТЕ</span>
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
                «Адреналин» — крупнейший спортивный магазин в Керчи. Работаем с 2002 года
                и за это время помогли тысячам спортсменов найти идеальное снаряжение.
              </p>
              <div className="flex flex-wrap gap-8">
                {[
                  { num: "23+", label: "года на рынке" },
                  { num: "15 000+", label: "товаров в наличии" },
                  { num: "5000+", label: "клиентов" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-oswald font-bold" style={{ fontSize: "2.5rem", color: "#ff5000", lineHeight: 1 }}>
                      {stat.num}
                    </div>
                    <div className="text-xs uppercase tracking-wide mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                "🚴 Велосипеды",
                "🏋️ Тренажёры",
                "👟 Обувь",
                "🎽 Одежда",
                "🤿 Товары для дайвинга",
                "🏄 Сапборды",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-200 hover:scale-105 cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ПРЕИМУЩЕСТВА ─── */}
      <section className="py-20 px-6" style={{ background: "#0e0e0e" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-sm font-oswald uppercase tracking-widest mb-3" style={{ color: "#ff5000" }}>
              Наши преимущества
            </div>
            <h2
              className="font-oswald uppercase"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", color: "#fff", letterSpacing: "-0.01em" }}
            >
              ВЫБИРАЙ ЛУЧШЕЕ
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv) => (
              <div
                key={adv.title}
                className="p-6 group transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{ background: "rgba(255,80,0,0.15)" }}
                >
                  <Icon name={adv.icon as "Trophy"} size={22} style={{ color: "#ff5000" }} />
                </div>
                <h3 className="font-oswald uppercase mb-3 text-sm" style={{ color: "#fff", letterSpacing: "0.04em" }}>
                  {adv.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ДОСТАВКА ─── */}
      <section className="py-20 px-6" style={{ background: "#151515" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-sm font-oswald uppercase tracking-widest mb-3" style={{ color: "#ff5000" }}>
              Получение товара
            </div>
            <h2
              className="font-oswald uppercase"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", color: "#fff", letterSpacing: "-0.01em" }}
            >
              БЫСТРО И УДОБНО
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {deliveryOptions.map((opt) => (
              <div
                key={opt.label}
                className="relative p-8 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: opt.accent
                    ? "linear-gradient(135deg, rgba(255,80,0,0.18), rgba(255,80,0,0.04))"
                    : "rgba(255,255,255,0.04)",
                  border: opt.accent ? "1px solid rgba(255,80,0,0.5)" : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {opt.accent && (
                  <div
                    className="absolute top-0 right-0 px-3 py-1 text-xs font-oswald uppercase tracking-wider"
                    style={{ background: "#ff5000", color: "#fff" }}
                  >
                    Популярно
                  </div>
                )}
                <div
                  className="w-14 h-14 flex items-center justify-center mb-5"
                  style={{ background: opt.accent ? "rgba(255,80,0,0.2)" : "rgba(255,255,255,0.07)" }}
                >
                  <Icon
                    name={opt.icon as "MapPin"}
                    size={26}
                    style={{ color: opt.accent ? "#ff5000" : "rgba(255,255,255,0.65)" }}
                  />
                </div>
                <h3 className="font-oswald uppercase mb-3 text-base" style={{ color: "#fff" }}>
                  {opt.label}
                </h3>
                <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {opt.desc}
                </p>
              </div>
            ))}
          </div>

          {/* ─── ФИНАЛЬНЫЙ CTA ─── */}
          <div
            className="text-center py-14 px-8"
            style={{
              background: "linear-gradient(135deg, rgba(255,80,0,0.12), rgba(255,80,0,0.04))",
              border: "1px solid rgba(255,80,0,0.25)",
            }}
          >
            <h3
              className="font-oswald uppercase mb-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "#fff" }}
            >
              ГОТОВ СДЕЛАТЬ ЗАКАЗ?
            </h3>
            <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.55)" }}>
              Заходи на сайт и выбирай из более 15 000 товаров
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://adrenalin-kerch.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 font-oswald uppercase tracking-wider text-lg font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ background: "#ff5000", color: "#fff" }}
              >
                Открыть магазин
                <Icon name="ExternalLink" size={18} />
              </a>
              <a
                href="tel:+79785039041"
                className="inline-flex items-center gap-3 px-10 py-4 font-oswald uppercase tracking-wider text-lg transition-all duration-200 hover:scale-105"
                style={{ border: "2px solid rgba(255,255,255,0.22)", color: "#fff", background: "transparent" }}
              >
                <Icon name="Phone" size={18} />
                Позвонить
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer
        className="py-8 px-6 border-t"
        style={{ background: "#080808", borderColor: "rgba(255,255,255,0.07)" }}
      >
        <div
          className="max-w-5xl mx-auto flex flex-wrap justify-between items-center gap-4 text-sm"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          <span className="font-oswald uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>
            АДРЕНАЛИН — Керчь
          </span>
          <span>© 2024 adrenalin-kerch.ru · Все права защищены</span>
          <a
            href="https://adrenalin-kerch.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition-colors"
            style={{ color: "#ff5000" }}
          >
            adrenalin-kerch.ru
          </a>
        </div>
      </footer>
    </div>
  );
}