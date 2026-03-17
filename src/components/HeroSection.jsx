'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: '98%', label: 'Client Satisfaction' },
  { value: '150+', label: 'Projects Delivered' },
  { value: '3×', label: 'Avg. Growth Rate' },
  { value: '40+', label: 'Brand Identities' },
]

const headline = 'W E L C O M E   I T Z F I Z Z'.split('')

export default function HeroSection() {
  const heroRef = useRef(null)
  const orbRef = useRef(null)
  const orbit2Ref = useRef(null)
  const headlineRef = useRef(null)
  const statsRef = useRef(null)
  const taglineRef = useRef(null)
  const gradientBlobRef = useRef(null)
  const dotGridRef = useRef(null)
  const scrollIndicatorRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Initial load animations ──────────────────────────────
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Headline letters staggered
      const letters = headlineRef.current.querySelectorAll('.letter')
      tl.fromTo(
        letters,
        { y: 80, opacity: 0, rotateX: -40 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.025 }
      )

      // Tagline
      tl.fromTo(
        taglineRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.5'
      )

      // Stats stagger
      const statItems = statsRef.current.querySelectorAll('.stat-item')
      tl.fromTo(
        statItems,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.12 },
        '-=0.4'
      )

      // Orb entrance
      tl.fromTo(
        orbRef.current,
        { scale: 0.4, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: 'elastic.out(1,0.5)' },
        '-=1.2'
      )

      tl.fromTo(
        orbit2Ref.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 },
        '-=0.8'
      )

      // Scroll indicator
      tl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.2'
      )

      // ── Scroll-driven animations ─────────────────────────────
      const hero = heroRef.current

      // Orb moves up + scales down + rotates as user scrolls
      gsap.to(orbRef.current, {
        y: '-40vh',
        scale: 1.6,
        rotation: 180,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      })

      // Second orbit ring expands
      gsap.to(orbit2Ref.current, {
        scale: 2.5,
        opacity: 0,
        rotation: -90,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      })

      // Gradient blob drifts
      gsap.to(gradientBlobRef.current, {
        x: '15vw',
        y: '-20vh',
        scale: 1.3,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 2,
        },
      })

      // Headline slides up and fades
      gsap.to(headlineRef.current, {
        y: '-15vh',
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: '50% top',
          scrub: 1,
        },
      })

      // Stats fade out
      gsap.to(statsRef.current, {
        y: '-10vh',
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: '10% top',
          end: '55% top',
          scrub: 1,
        },
      })

      // Dot grid parallax
      gsap.to(dotGridRef.current, {
        y: '25vh',
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })

      // Scroll indicator fades out early
      gsap.to(scrollIndicatorRef.current, {
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: '5% top',
          end: '15% top',
          scrub: 1,
        },
      })

      // Continuous orb float animation (ambient)
      gsap.to(orbRef.current, {
        y: '+=18',
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* ── Hero Section ─────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center"
        style={{ background: 'var(--color-bg)' }}
      >
        {/* Dot grid background */}
        <div
          ref={dotGridRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, #333 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            opacity: 0.35,
          }}
        />

        {/* Gradient blob */}
        <div
          ref={gradientBlobRef}
          className="absolute pointer-events-none"
          style={{
            width: '60vw',
            height: '60vw',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(232,255,59,0.12) 0%, rgba(255,59,59,0.06) 50%, transparent 70%)',
            left: '-10vw',
            top: '-10vw',
            filter: 'blur(60px)',
          }}
        />

        {/* ── Animated Orb ─────────────────────────────────── */}
        <div
          ref={orbRef}
          className="absolute pointer-events-none"
          style={{
            width: 'min(420px, 55vw)',
            height: 'min(420px, 55vw)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Core sphere */}
          <div
            className="w-full h-full rounded-full relative"
            style={{
              background:
                'radial-gradient(circle at 35% 35%, #e8ff3b 0%, #a0b520 30%, #1a1f00 70%, #0a0a0a 100%)',
              boxShadow:
                '0 0 80px rgba(232,255,59,0.25), 0 0 160px rgba(232,255,59,0.08), inset 0 0 40px rgba(255,255,200,0.1)',
            }}
          >
            {/* Surface ring 1 */}
            <div
              className="absolute inset-4 rounded-full border"
              style={{ borderColor: 'rgba(232,255,59,0.15)' }}
            />
            {/* Surface ring 2 */}
            <div
              className="absolute rounded-full border"
              style={{
                inset: '15%',
                borderColor: 'rgba(255,255,255,0.08)',
                borderWidth: '1px',
              }}
            />
            {/* Glare */}
            <div
              className="absolute rounded-full"
              style={{
                width: '35%',
                height: '22%',
                top: '14%',
                left: '16%',
                background:
                  'radial-gradient(ellipse, rgba(255,255,255,0.45) 0%, transparent 80%)',
                filter: 'blur(4px)',
              }}
            />
            {/* ITZFIZZ text on orb */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(18px, 3vw, 36px)',
                color: 'rgba(10,10,10,0.75)',
                letterSpacing: '0.25em',
              }}
            >
              ITZFIZZ
            </div>
          </div>

          {/* Orbit ring */}
          <div
            className="absolute rounded-full"
            style={{
              inset: '-12%',
              border: '1.5px solid rgba(232,255,59,0.2)',
              borderRadius: '50%',
              transform: 'rotateX(70deg) rotateZ(20deg)',
            }}
          />
        </div>

        {/* Second orbit ring */}
        <div
          ref={orbit2Ref}
          className="absolute pointer-events-none rounded-full"
          style={{
            width: 'min(560px, 72vw)',
            height: 'min(560px, 72vw)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            border: '1px solid rgba(232,255,59,0.08)',
          }}
        />

        {/* ── Content Layer ─────────────────────────────────── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">
          {/* Nav pill */}
          <div
            className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-widest mb-2"
            style={{
              border: '1px solid rgba(232,255,59,0.25)',
              color: 'var(--color-accent)',
              background: 'rgba(232,255,59,0.05)',
              fontFamily: 'var(--font-body)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: 'var(--color-accent)' }}
            />
            DIGITAL CREATIVE STUDIO
          </div>

          {/* Headline */}
          <div
            ref={headlineRef}
            className="text-center overflow-hidden"
            style={{ perspective: '800px' }}
            aria-label="Welcome Itzfizz"
          >
            <div
              className="flex flex-wrap justify-center"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(38px, 7.5vw, 120px)',
                lineHeight: 1,
                color: 'var(--color-text)',
                letterSpacing: '0.08em',
              }}
            >
              {headline.map((char, i) => (
                <span
                  key={i}
                  className="letter inline-block"
                  style={{
                    color:
                      char === 'I' && i > 12
                        ? 'var(--color-accent)'
                        : 'inherit',
                    display: char === ' ' ? 'inline-block' : 'inline-block',
                    minWidth: char === ' ' ? '0.3em' : undefined,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </div>
          </div>

          {/* Tagline */}
          <p
            ref={taglineRef}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(13px, 1.4vw, 17px)',
              color: 'var(--color-muted)',
              letterSpacing: '0.05em',
              maxWidth: '420px',
              textAlign: 'center',
              lineHeight: 1.7,
            }}
          >
            We craft digital experiences that convert visitors into customers
            and brands into legends.
          </p>

          {/* Stats */}
          <div
            ref={statsRef}
            className="flex flex-wrap justify-center gap-8 mt-2"
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="stat-item flex flex-col items-center"
                style={{ minWidth: '90px' }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(28px, 4vw, 56px)',
                    color: i % 2 === 0 ? 'var(--color-accent)' : 'var(--color-text)',
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(10px, 1vw, 12px)',
                    color: 'var(--color-muted)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginTop: '4px',
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '10px',
              letterSpacing: '0.2em',
              color: 'var(--color-muted)',
            }}
          >
            SCROLL
          </span>
          <div
            className="w-px h-12 origin-top"
            style={{
              background:
                'linear-gradient(to bottom, var(--color-accent), transparent)',
              animation: 'scrollLine 1.8s ease-in-out infinite',
            }}
          />
        </div>

        {/* Corner accent lines */}
        <div
          className="absolute top-6 left-6 pointer-events-none"
          style={{ opacity: 0.3 }}
        >
          <div
            style={{
              width: '40px',
              height: '1px',
              background: 'var(--color-accent)',
            }}
          />
          <div
            style={{
              width: '1px',
              height: '40px',
              background: 'var(--color-accent)',
            }}
          />
        </div>
        <div
          className="absolute top-6 right-6 pointer-events-none flex flex-col items-end"
          style={{ opacity: 0.3 }}
        >
          <div
            style={{
              width: '40px',
              height: '1px',
              background: 'var(--color-accent)',
            }}
          />
          <div
            className="self-end"
            style={{
              width: '1px',
              height: '40px',
              background: 'var(--color-accent)',
            }}
          />
        </div>

        <style>{`
          @keyframes scrollLine {
            0% { transform: scaleY(0); opacity: 1; }
            50% { transform: scaleY(1); opacity: 1; }
            100% { transform: scaleY(1); opacity: 0; }
          }
        `}</style>
      </section>

      {/* ── Spacer section below hero ──────────────────────────── */}
      <section
        className="relative w-full flex flex-col items-center justify-center"
        style={{
          minHeight: '100vh',
          background: 'var(--color-bg)',
          borderTop: '1px solid #1a1a1a',
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-10">
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px, 10vw, 140px)',
              color: 'var(--color-text)',
              lineHeight: 0.9,
            }}
          >
            DIGITAL
            <br />
            <span style={{ color: 'var(--color-accent)' }}>FIRST.</span>
          </span>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(14px, 1.5vw, 18px)',
              color: 'var(--color-muted)',
              maxWidth: '520px',
              lineHeight: 1.8,
            }}
          >
            From brand identity to web development — Itzfizz Digital helps
            businesses grow with strategic design and cutting-edge technology.
          </p>

          <a
            href="#"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              letterSpacing: '0.2em',
              color: 'var(--color-bg)',
              background: 'var(--color-accent)',
              padding: '14px 36px',
              borderRadius: '2px',
              textDecoration: 'none',
              textTransform: 'uppercase',
              fontWeight: 500,
            }}
          >
            Explore Our Work
          </a>
        </div>
      </section>
    </>
  )
}
