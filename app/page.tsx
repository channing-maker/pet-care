"use client";

import Image from "next/image";
import { type FormEvent, useEffect, useState } from "react";

const containerClass = "mx-auto w-[min(1180px,calc(100%-32px))]";
const buttonClass =
  "inline-flex min-h-[50px] items-center justify-center gap-[9px] rounded-[8px] border border-[#17201b2e] px-5 font-extrabold transition hover:-translate-y-0.5 hover:shadow-lg";

const services = [
  {
    title: "基础洗护",
    copy: "温水清洁、护毛素、吹干梳理、肛门腺、脚底毛和腹底毛修剪。",
    price: "¥88",
    tone: "bg-white",
    icon: <FiveStarRatingIcon />,
  },
  {
    title: "精致造型",
    copy: "按脸型、体型和日常打理习惯设计造型，包含全身修剪与细节圆润处理。",
    price: "¥168",
    tone: "bg-[#f3fbf7]",
    icon: <StylingIcon />,
  },
  {
    title: "皮毛 SPA",
    copy: "针对干燥、换毛和轻度敏感毛况，提供低刺激浴液与保湿修护方案。",
    price: "¥128",
    tone: "bg-[#fff7ea]",
    icon: <SpaIcon />,
  },
  {
    title: "牙耳爪护理",
    copy: "洁耳、剪指甲、磨甲、口腔清洁和泪痕基础护理，可单项加购。",
    price: "¥39",
    tone: "bg-[#fff1ed]",
    icon: <CareIcon />,
  },
];

const slides = [
  {
    src: "/assets/salon-wash-spa.png",
    alt: "中国高端宠物洗护店的洗护水疗区，带独立不锈钢洗护台和温暖灯光",
    title: "洗护水疗区",
    copy: "独立不锈钢洗护台、分区浴液陈列和柔和灯带，让水温、风速和清洁动线都更可控。",
  },
  {
    src: "/assets/salon-styling-studio.png",
    alt: "中国高端宠物洗护店的美容造型区，带升降美容台、镜面和整齐护理工具",
    title: "美容造型区",
    copy: "升降美容台、镜面灯光和整齐工具墙，适合精修线条、梳通底毛和造型复盘。",
  },
  {
    src: "/assets/salon-reception-lounge.png",
    alt: "中国高端宠物洗护店的接待休息区，带前台、等候沙发和宠物休息位",
    title: "接待休息区",
    copy: "石材前台、主人等候位和开放式宠物休息角，进店第一眼就是安静、明亮、干净。",
  },
];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-20 border-b border-white/30 bg-[#fffaf1]/80 backdrop-blur-2xl">
        <nav
          className={cx(
            containerClass,
            "flex min-h-[70px] items-center justify-between gap-[18px] max-[640px]:min-h-16",
          )}
          aria-label="主导航"
        >
          <a
            className="inline-flex items-center gap-2.5 whitespace-nowrap font-extrabold"
            href="#top"
            aria-label="萌爪洗护社首页"
          >
            <span
              className="grid size-[38px] place-items-center rounded-[8px] border-2 border-[#17201b2e] bg-[#9ddfd3] text-[#12322e] shadow-[4px_4px_0_rgba(23,32,27,0.08)]"
              aria-hidden="true"
            >
              <PawIcon />
            </span>
            萌爪洗护社
          </a>
          <div className="flex items-center gap-[clamp(12px,2.6vw,30px)] text-[0.95rem] text-[#17201bbd] max-[980px]:hidden">
            <a className="py-2 hover:text-[#17201b]" href="#services">
              服务
            </a>
            <a className="py-2 hover:text-[#17201b]" href="#showcase">
              环境
            </a>
            <a className="py-2 hover:text-[#17201b]" href="#process">
              流程
            </a>
            <a className="py-2 hover:text-[#17201b]" href="#trust">
              安心标准
            </a>
            <a className="py-2 hover:text-[#17201b]" href="#contact">
              联系
            </a>
          </div>
          <a
            className="inline-flex min-h-[42px] items-center justify-center rounded-[8px] border border-[#17201b33] bg-[#17201b] px-[18px] font-bold text-[#fffaf1] shadow-[0_8px_18px_rgba(23,32,27,0.18)] max-[640px]:min-h-[38px] max-[640px]:px-3 max-[640px]:text-[0.88rem]"
            href="#booking"
          >
            立即预约
          </a>
        </nav>
      </header>

      <main id="top">
        <section
          className="relative isolate grid min-h-[78vh] items-end overflow-hidden bg-[#bde7db] px-0 pt-[118px] pb-[58px] text-[#12201c] max-[640px]:min-h-[82svh] max-[640px]:pt-24 max-[640px]:pb-[34px]"
          aria-label="萌爪洗护社"
        >
          <HeroCanvas />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,250,241,0.94),rgba(255,250,241,0.64)_45%,rgba(255,250,241,0.16)_78%),linear-gradient(0deg,rgba(255,253,247,0.88),rgba(255,253,247,0)_38%)] max-[640px]:bg-[linear-gradient(0deg,rgba(255,250,241,0.96),rgba(255,250,241,0.82)_58%,rgba(255,250,241,0.2)),linear-gradient(90deg,rgba(255,250,241,0.88),rgba(255,250,241,0.36))]" />
          <div className={containerClass}>
            <div className="max-w-[650px]">
              <p className="mb-[18px] inline-flex items-center gap-2 text-[0.92rem] font-extrabold text-[#31534b] before:h-0.5 before:w-8 before:bg-[#ff7a62] before:content-['']">
                猫犬洗护 · 美容造型 · 皮毛养护
              </p>
              <h1 className="mb-5 max-w-[8em] text-[clamp(3.4rem,9vw,7.2rem)] leading-[0.92] tracking-normal max-[640px]:max-w-[6.5em]">
                萌爪洗护社
              </h1>
              <p className="mb-7 max-w-[560px] text-[clamp(1rem,2vw,1.18rem)] leading-[1.85] text-[#34463f]">
                给毛孩子一场温和、干净、有仪式感的洗护。透明消毒、独立吹干、护理师一对一记录毛发与皮肤状态。
              </p>
              <div className="mb-[26px] flex flex-wrap gap-3">
                <a
                  className={cx(
                    buttonClass,
                    "bg-[#ff7a62] text-white shadow-[0_12px_24px_rgba(255,122,98,0.3)]",
                  )}
                  href="#booking"
                >
                  <CalendarIcon />
                  预约洗护
                </a>
                <a
                  className={cx(
                    buttonClass,
                    "bg-[#fffdf7c7] text-[#17201b]",
                  )}
                  href="tel:4006680520"
                >
                  <PhoneIcon />
                  400-668-0520
                </a>
              </div>
              <div
                className="grid max-w-[610px] grid-cols-3 gap-2.5 max-[640px]:grid-cols-1"
                aria-label="门店亮点"
              >
                {[
                  ["45 分钟起", "基础洗护快速完成"],
                  ["一宠一巾", "工具分区清洁消毒"],
                  ["接送可选", "3 公里内预约接送"],
                ].map(([title, copy]) => (
                  <div
                    className="min-h-[72px] rounded-[8px] border border-[#17201b1f] bg-[#fffdf7b8] px-3.5 py-3 backdrop-blur-md max-[640px]:min-h-0"
                    key={title}
                  >
                    <strong className="mb-1 block text-[1.1rem]">
                      {title}
                    </strong>
                    <span className="text-[0.88rem] text-[#50645c]">
                      {copy}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <BookingSection />
        <ServicesSection />
        <ShowcaseSection />
        <ProcessSection />
        <TrustSection />
        <ContactSection />
      </main>

      <footer className="bg-[#17201b] py-[26px] text-white/75">
        <div
          className={cx(
            containerClass,
            "flex flex-wrap justify-between gap-[18px] text-[0.9rem]",
          )}
        >
          <span>© 2026 萌爪洗护社 · 宠物洗护美容单页示例</span>
          <span>店内环境图由 AI 生成，适合品牌概念展示。</span>
        </div>
      </footer>
    </>
  );
}

function HeroCanvas() {
  useEffect(() => {
    const canvas = document.getElementById("heroScene");
    if (!(canvas instanceof HTMLCanvasElement)) {
      return undefined;
    }

    const heroCanvas: HTMLCanvasElement = canvas;
    const context = heroCanvas.getContext("2d");
    if (!context) {
      return undefined;
    }
    const ctx: CanvasRenderingContext2D = context;

    let width = 0;
    let height = 0;
    let animationId = 0;
    const bubbles = Array.from({ length: 34 }, (_, index) => ({
      x: Math.random(),
      y: Math.random(),
      r: 5 + Math.random() * 18,
      speed: 0.18 + Math.random() * 0.42,
      phase: index * 0.7,
    }));

    function resizeCanvas() {
      const ratio = window.devicePixelRatio || 1;
      width = heroCanvas.clientWidth;
      height = heroCanvas.clientHeight;
      heroCanvas.width = Math.max(1, Math.floor(width * ratio));
      heroCanvas.height = Math.max(1, Math.floor(height * ratio));
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    function roundedRect(x: number, y: number, w: number, h: number, r: number) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    }

    function drawScene(time: number) {
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#d8f4ef");
      gradient.addColorStop(0.45, "#b7e8dd");
      gradient.addColorStop(1, "#ffd8bf");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "rgba(255, 253, 247, 0.64)";
      roundedRect(width * 0.58, height * 0.16, width * 0.32, height * 0.1, 8);
      ctx.fill();

      ctx.fillStyle = "rgba(28, 136, 125, 0.16)";
      roundedRect(width * 0.64, height * 0.3, width * 0.22, height * 0.44, 8);
      ctx.fill();

      const tubX = width * 0.54;
      const tubY = height * 0.58;
      const tubW = Math.min(width * 0.42, 560);
      const tubH = height * 0.22;
      ctx.fillStyle = "#fffdf7";
      roundedRect(tubX, tubY, tubW, tubH, 8);
      ctx.fill();
      ctx.strokeStyle = "rgba(23, 32, 27, 0.18)";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = "#f7b84b";
      roundedRect(tubX + tubW * 0.18, tubY - tubH * 0.25, tubW * 0.47, tubH * 0.74, 8);
      ctx.fill();

      ctx.fillStyle = "#7b553b";
      ctx.beginPath();
      ctx.ellipse(tubX + tubW * 0.39, tubY - tubH * 0.38, tubW * 0.16, tubH * 0.38, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#7b553b";
      ctx.beginPath();
      ctx.ellipse(tubX + tubW * 0.26, tubY - tubH * 0.45, tubW * 0.07, tubH * 0.18, -0.6, 0, Math.PI * 2);
      ctx.ellipse(tubX + tubW * 0.51, tubY - tubH * 0.45, tubW * 0.07, tubH * 0.18, 0.6, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#fff7ea";
      ctx.beginPath();
      ctx.arc(tubX + tubW * 0.34, tubY - tubH * 0.4, tubW * 0.018, 0, Math.PI * 2);
      ctx.arc(tubX + tubW * 0.44, tubY - tubH * 0.4, tubW * 0.018, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "#fff7ea";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(tubX + tubW * 0.39, tubY - tubH * 0.31, tubW * 0.05, 0.2, Math.PI - 0.2);
      ctx.stroke();

      ctx.strokeStyle = "#1c887d";
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(tubX + tubW * 0.8, tubY);
      ctx.quadraticCurveTo(tubX + tubW * 0.78, tubY - tubH * 0.76, tubX + tubW * 0.92, tubY - tubH * 0.8);
      ctx.stroke();

      ctx.fillStyle = "#17201b";
      roundedRect(tubX + tubW * 0.89, tubY - tubH * 0.84, tubW * 0.08, 10, 5);
      ctx.fill();

      bubbles.forEach((bubble) => {
        const bob = Math.sin(time * 0.0012 + bubble.phase) * 16;
        const x = bubble.x * width + bob;
        const y =
          ((bubble.y * height - time * bubble.speed * 0.03) % height + height) %
          height;
        ctx.beginPath();
        ctx.arc(x, y, bubble.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.28)";
        ctx.fill();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      animationId = window.requestAnimationFrame(drawScene);
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animationId = window.requestAnimationFrame(drawScene);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      className="absolute inset-0 -z-20 h-full w-full bg-[#bde7db]"
      id="heroScene"
      aria-hidden="true"
    />
  );
}

function BookingSection() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const petType = String(data.get("petType") || "");
    const service = String(data.get("service") || "");
    const date = String(data.get("date") || "");

    setMessage(
      `已收到 ${petType} 的「${service}」预约需求，门店会在 ${date} 前后与您确认具体时间。`,
    );
    form.reset();
  }

  return (
    <section
      className="bg-[#17201b] py-[34px] text-white"
      id="booking"
      aria-label="快速预约"
    >
      <div
        className={cx(
          containerClass,
          "grid grid-cols-[0.9fr_1.8fr] items-center gap-7 max-[980px]:grid-cols-1",
        )}
      >
        <div>
          <h2 className="mb-2 text-[clamp(1.6rem,3vw,2.35rem)]">
            快速预约
          </h2>
          <p className="mb-0 leading-[1.7] text-white/70">
            留下需求后，门店会按体型、毛量和时间段回电确认。
          </p>
        </div>
        <form
          className="grid grid-cols-[1fr_1.2fr_1fr_1fr_auto] gap-2.5 max-[980px]:grid-cols-2 max-[640px]:grid-cols-1"
          onSubmit={handleSubmit}
        >
          <BookingField label="宠物类型">
            <select name="petType" required defaultValue="">
              <option value="">请选择</option>
              <option>猫咪</option>
              <option>小型犬</option>
              <option>中大型犬</option>
            </select>
          </BookingField>
          <BookingField label="服务项目">
            <select name="service" required defaultValue="">
              <option value="">请选择</option>
              <option>基础洗护</option>
              <option>精致造型</option>
              <option>皮毛 SPA</option>
              <option>牙耳爪护理</option>
            </select>
          </BookingField>
          <BookingField label="预约日期">
            <input type="date" name="date" required />
          </BookingField>
          <BookingField label="联系电话">
            <input type="tel" name="phone" placeholder="手机号" required />
          </BookingField>
          <button
            className="min-h-[58px] cursor-pointer rounded-[8px] border-0 bg-[#f7b84b] px-[18px] font-black text-[#261a05] max-[980px]:col-span-full"
            type="submit"
          >
            提交
          </button>
          <p
            className="col-span-full mt-0.5 mb-0 min-h-[22px] text-[0.9rem] text-[#9ddfd3]"
            role="status"
          >
            {message}
          </p>
        </form>
      </div>
    </section>
  );
}

function BookingField({
  label,
  children,
}: {
  label: string;
  children: React.ReactElement;
}) {
  return (
    <label className="relative block [&_input]:min-h-[58px] [&_input]:w-full [&_input]:rounded-[8px] [&_input]:border [&_input]:border-white/20 [&_input]:bg-white/10 [&_input]:px-3 [&_input]:pt-[22px] [&_input]:pb-2 [&_input]:text-white [&_input]:outline-none [&_input]:focus:border-[#9ddfd3] [&_input]:focus:shadow-[0_0_0_3px_rgba(157,223,211,0.18)] [&_select]:min-h-[58px] [&_select]:w-full [&_select]:rounded-[8px] [&_select]:border [&_select]:border-white/20 [&_select]:bg-white/10 [&_select]:px-3 [&_select]:pt-[22px] [&_select]:pb-2 [&_select]:text-white [&_select]:outline-none [&_select]:focus:border-[#9ddfd3] [&_select]:focus:shadow-[0_0_0_3px_rgba(157,223,211,0.18)]">
      <span className="pointer-events-none absolute top-[7px] left-3 text-[0.74rem] text-white/60">
        {label}
      </span>
      {children}
    </label>
  );
}

function ServicesSection() {
  return (
    <section className="bg-[#fffdf7] py-[clamp(58px,8vw,96px)]" id="services">
      <div className={containerClass}>
        <SectionHead
          kicker="SERVICE MENU"
          title="按毛况定制，不做流水线洗护"
          copy="每次服务会先检查皮肤、耳道、趾间和打结情况，再确认洗护方式。价格为基础参考，最终以门店评估为准。"
        />
        <div className="grid grid-cols-4 gap-3.5 max-[980px]:grid-cols-2 max-[640px]:grid-cols-1">
          {services.map((service) => (
            <article
              className={cx(
                "flex min-h-[250px] flex-col rounded-[8px] border border-[#17201b1f] p-[22px] shadow-[0_10px_26px_rgba(23,32,27,0.05)] max-[640px]:min-h-[220px]",
                service.tone,
              )}
              key={service.title}
            >
              <div className="mb-[18px] grid size-12 place-items-center rounded-[8px] bg-[#1c887d1f] text-[#1c887d]">
                {service.icon}
              </div>
              <h3 className="mb-2 text-[1.22rem] font-bold">
                {service.title}
              </h3>
              <p className="leading-[1.65] text-[#637066]">{service.copy}</p>
              <div className="mt-auto pt-[18px] text-[1.45rem] font-black text-[#ff7a62]">
                {service.price}{" "}
                <small className="text-[0.82rem] font-bold text-[#637066]">
                  起
                </small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShowcaseSection() {
  return (
    <section className="bg-[#edf7f1] py-[clamp(58px,8vw,96px)]" id="showcase">
      <div className={containerClass}>
        <SectionHead
          kicker="SALON SPACE"
          title="看得见的清洁环境"
          copy="洗护区、吹干区和等待区分开管理，降低交叉干扰。胆小的宠物会安排低噪声时段和更缓慢的适应流程。"
        />
        <SalonCarousel />
      </div>
    </section>
  );
}

function SalonCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || prefersReducedMotion || slides.length < 2) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [paused, prefersReducedMotion]);

  function showSlide(direction: -1 | 1) {
    setActiveIndex((index) => (index + direction + slides.length) % slides.length);
  }

  return (
    <div
      className="relative min-h-[clamp(320px,56vw,660px)] overflow-hidden rounded-[8px] bg-[#d8e8df] shadow-[0_18px_44px_rgba(23,32,27,0.12)] max-[980px]:min-h-[430px] max-[640px]:min-h-[420px]"
      aria-label="店内环境轮播"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <figure
            className={cx(
              "absolute inset-0 m-0 h-full w-full scale-[1.02] opacity-0 transition-[opacity,transform] duration-700 ease-out",
              index === activeIndex && "z-[1] scale-100 opacity-100",
            )}
            key={slide.title}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 768px) 100vw, 1180px"
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,32,27,0.55),rgba(23,32,27,0.12)_52%,rgba(23,32,27,0.02)),linear-gradient(0deg,rgba(23,32,27,0.44),rgba(23,32,27,0)_48%)]" />
            <figcaption className="absolute bottom-[clamp(22px,4vw,46px)] left-[clamp(18px,4vw,42px)] z-[2] max-w-[min(470px,calc(100%-112px))] text-white">
              <strong className="mb-2.5 block text-[clamp(1.35rem,3vw,2.35rem)] leading-[1.1]">
                {slide.title}
              </strong>
              <span className="block leading-[1.7] text-white/80">
                {slide.copy}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <span className="absolute top-[clamp(16px,3vw,34px)] right-[clamp(16px,3vw,34px)] z-[4] inline-flex min-h-[38px] items-center rounded-[8px] border border-white/30 bg-[#17201b70] px-3.5 font-extrabold text-white backdrop-blur-md max-[640px]:hidden">
        AI 环境概念图
      </span>
      <button
        className="absolute inset-y-0 left-0 z-[3] w-1/2 cursor-[w-resize] border-0 bg-transparent p-0 focus-visible:-outline-offset-8 focus-visible:outline-3 focus-visible:outline-[#f7b84bdc]"
        type="button"
        aria-label="上一张环境图"
        onClick={() => showSlide(-1)}
      />
      <button
        className="absolute inset-y-0 right-0 z-[3] w-1/2 cursor-[e-resize] border-0 bg-transparent p-0 focus-visible:-outline-offset-8 focus-visible:outline-3 focus-visible:outline-[#f7b84bdc]"
        type="button"
        aria-label="下一张环境图"
        onClick={() => showSlide(1)}
      />
    </div>
  );
}

function ProcessSection() {
  return (
    <section className="bg-[#fffaf1] py-[clamp(58px,8vw,96px)]" id="process">
      <div className={containerClass}>
        <SectionHead
          kicker="GROOMING FLOW"
          title="一次完整洗护，四步交付"
          copy="从入店评估到离店护理建议，过程可追踪、结果好复盘。"
        />
        <div className="grid grid-cols-4 gap-[18px] [counter-reset:step] max-[980px]:grid-cols-2 max-[640px]:grid-cols-1">
          {[
            ["入店评估", "记录毛量、打结、皮肤状态和性格反应，确认是否适合当日洗护。"],
            ["温和清洁", "选择对应浴液与护毛方案，避开眼鼻耳敏感部位。"],
            ["吹干造型", "分层吹干并梳顺底毛，造型服务会同步修剪线条。"],
            ["护理反馈", "离店告知皮肤、耳道、指甲与泪痕情况，给出家庭护理建议。"],
          ].map(([title, copy]) => (
            <article
              className="relative border-t-2 border-[#17201b2e] pt-[52px] before:absolute before:top-[-18px] before:left-0 before:grid before:size-[42px] before:place-items-center before:rounded-[8px] before:bg-[#17201b] before:font-black before:text-white before:[counter-increment:step] before:content-['0'_counter(step)]"
              key={title}
            >
              <h3 className="mb-2 font-bold">{title}</h3>
              <p className="leading-[1.68] text-[#637066]">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="bg-white py-[clamp(58px,8vw,96px)]" id="trust">
      <div
        className={cx(
          containerClass,
          "grid grid-cols-[0.85fr_1.15fr] items-start gap-[42px] max-[980px]:grid-cols-1",
        )}
      >
        <div className="overflow-hidden rounded-[8px] border border-[#17201b1f] bg-[#17201b] text-white shadow-[0_18px_44px_rgba(23,32,27,0.12)]">
          <div className="bg-[#21342d] p-7">
            <h2 className="mb-2 text-[clamp(1.8rem,3vw,2.6rem)]">
              营业时间
            </h2>
            <p className="mb-0 leading-[1.7] text-white/70">
              建议提前一天预约。周末和节假日支持加开早晚时段。
            </p>
          </div>
          {[
            ["周一至周五", "10:00 - 20:30"],
            ["周六至周日", "09:30 - 21:00"],
            ["接送服务", "提前 2 小时预约"],
          ].map(([label, value]) => (
            <div
              className="flex items-center justify-between gap-[18px] border-t border-white/10 px-7 py-[17px] max-[640px]:px-5 max-[640px]:py-[15px]"
              key={label}
            >
              <span>{label}</span>
              <span className="font-black text-[#9ddfd3]">{value}</span>
            </div>
          ))}
        </div>
        <div>
          <SectionHead kicker="CARE STANDARD" title="安心标准写在明处" />
          <div className="grid gap-3">
            {[
              {
                title: "工具分宠消毒",
                copy: "毛巾、梳具、剪刀和洗护台按批次清洁，敏感皮肤可自带浴液。",
                icon: <CheckIcon />,
              },
              {
                title: "全程状态观察",
                copy: "呼吸、体温、情绪和站立情况会持续观察，发现不适会暂停并联系主人。",
                icon: <ShieldIcon />,
              },
              {
                title: "低噪声吹干",
                copy: "胆小宠物优先安排半封闭吹干位，分段休息，尽量降低应激。",
                icon: <CalmIcon />,
              },
            ].map((item) => (
              <article
                className="grid grid-cols-[auto_1fr] gap-3.5 rounded-[8px] border border-[#17201b1f] bg-[#fffdf7] p-[18px]"
                key={item.title}
              >
                <span className="text-[#1c887d]" aria-hidden="true">
                  {item.icon}
                </span>
                <div>
                  <h3 className="mb-1.5 text-[1.05rem] font-bold">
                    {item.title}
                  </h3>
                  <p className="mb-0 leading-[1.62] text-[#637066]">
                    {item.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="bg-[#fffdf7] pt-[clamp(58px,8vw,96px)] pb-11" id="contact">
      <div className={containerClass}>
        <div className="grid grid-cols-[1.1fr_0.9fr] items-center gap-7 rounded-[8px] border border-[#17201b1f] bg-white p-[34px] shadow-[0_16px_34px_rgba(23,32,27,0.08)] max-[980px]:grid-cols-1 max-[640px]:p-[22px]">
          <div>
            <p className="mb-2.5 font-black text-[#1c887d]">VISIT US</p>
            <h2 className="mb-2.5 text-[clamp(1.9rem,4vw,3.2rem)] font-bold">
              带它来洗个清爽澡
            </h2>
            <p className="max-w-[620px] leading-[1.78] text-[#637066]">
              地址：上海市宜川路街道陕西北路1620号（地图标记点，近华生大厦）。到店前可电话确认停车、接送范围和当日排队情况。
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                className={cx(
                  buttonClass,
                  "bg-[#ff7a62] text-white shadow-[0_12px_24px_rgba(255,122,98,0.3)]",
                )}
                href="#booking"
              >
                预约时间
              </a>
              <a
                className={cx(
                  buttonClass,
                  "bg-[#fffdf7c7] text-[#17201b]",
                )}
                href="tel:4006680520"
              >
                拨打电话
              </a>
            </div>
          </div>
          <div
            className="relative min-h-[306px] overflow-hidden rounded-[8px] border border-[#17201b1a] bg-[#eef7f3] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.68)]"
            aria-label="萌爪洗护社门店地图：上海市宜川路街道陕西北路1620号"
          >
            <Image
              className="object-cover"
              src="/assets/store-map-ai.png"
              alt="萌爪洗护社门店地图，标记上海市宜川路街道陕西北路1620号，靠近华生大厦、江宁路、长寿路和长寿公园"
              fill
              sizes="(max-width: 768px) 100vw, 540px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHead({
  kicker,
  title,
  copy,
}: {
  kicker: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mb-[30px] max-w-[700px]">
      <p className="mb-2.5 font-black text-[#1c887d]">{kicker}</p>
      <h2 className="mb-3 text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] font-bold">
        {title}
      </h2>
      {copy ? <p className="leading-[1.8] text-[#637066]">{copy}</p> : null}
    </div>
  );
}

function PawIcon() {
  return (
    <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="6" cy="8" r="2.5" />
      <circle cx="12" cy="6" r="2.5" />
      <circle cx="18" cy="8" r="2.5" />
      <path d="M5.5 17.5c0-3.1 3-5.5 6.5-5.5s6.5 2.4 6.5 5.5c0 1.8-1.5 2.8-3.2 2.2-1.2-.4-2.2-.7-3.3-.7s-2.2.3-3.3.7c-1.7.6-3.2-.4-3.2-2.2Z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="size-[18px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="size-[18px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.59 2.63a2 2 0 0 1-.45 2.11L8 9.71a16 16 0 0 0 6.29 6.29l1.25-1.25a2 2 0 0 1 2.11-.45c.85.27 1.73.47 2.63.59A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function FiveStarRatingIcon() {
  const starPath =
    "M12 2.2 14.95 8.2 21.55 9.15 16.78 13.8 17.9 20.38 12 17.26 6.1 20.38 7.22 13.8 2.45 9.15 9.05 8.2 12 2.2Z";

  return (
    <svg
      className="h-8 w-14 text-[#facc15]"
      viewBox="0 0 120 24"
      fill="currentColor"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="1.3"
      aria-hidden="true"
      focusable="false"
    >
      {[0, 24, 48, 72, 96].map((offset) => (
        <path d={starPath} transform={`translate(${offset})`} key={offset} />
      ))}
    </svg>
  );
}

function StylingIcon() {
  return (
    <svg className="size-[26px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14.5 4.5 19 9" />
      <path d="M5 19 19 5" />
      <path d="M7 7a3 3 0 0 1 4 4" />
      <path d="M13 13a3 3 0 0 0 4 4" />
    </svg>
  );
}

function SpaIcon() {
  return (
    <svg className="size-[26px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3c2.5 3.3 5 6.1 5 10a5 5 0 0 1-10 0c0-3.9 2.5-6.7 5-10Z" />
      <path d="M8.5 14.5a3.5 3.5 0 0 0 7 0" />
    </svg>
  );
}

function CareIcon() {
  return (
    <svg className="size-[26px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 2v4" />
      <path d="M14 2v4" />
      <path d="M7 6h10l-1 14H8L7 6Z" />
      <path d="M9 10h6" />
      <path d="M9 14h6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    </svg>
  );
}

function CalmIcon() {
  return (
    <svg className="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 12h18" />
      <path d="M12 3v18" />
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}
