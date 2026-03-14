import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitEnquiry } from "@/hooks/useQueries";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  DollarSign,
  Droplets,
  Facebook,
  Factory,
  Instagram,
  Layers,
  Leaf,
  Loader2,
  Mail,
  MapPin,
  Menu,
  Package,
  Phone,
  Printer,
  Recycle,
  Send,
  Shield,
  Star,
  Thermometer,
  TruckIcon,
  Twitter,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

// ─── NAV LINKS ──────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

// ─── PRODUCTS ────────────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    name: "Round Paper Plates",
    sizes: '6", 8", 10", 12"',
    desc: "Sturdy, food-safe round plates available in multiple diameters. Perfect for parties, events, and catering services.",
    icon: "🍽️",
  },
  {
    name: "Square Paper Plates",
    sizes: "8 x 8 inch, 10 x 10 inch",
    desc: "Modern square design plates ideal for contemporary food presentation. Popular in restaurants and fast food chains.",
    icon: "⬛",
  },
  {
    name: "Compartment Plates",
    sizes: "2 & 3 Section",
    desc: "Multi-compartment plates that keep foods separated. Ideal for school lunches, buffets, and meal prep.",
    icon: "🗂️",
  },
  {
    name: "Dona / Bowl Plates",
    sizes: "Various Capacities",
    desc: "Deep bowl-shaped plates for curries, desserts, and liquid foods. Leak-resistant design for mess-free serving.",
    icon: "🥣",
  },
  {
    name: "Custom Printed Plates",
    sizes: "Any Size",
    desc: "Brand your plates with custom logos, designs, and colors. Minimum order 5,000 units. Branding made easy.",
    icon: "🖨️",
  },
  {
    name: "Banana Leaf Plates",
    sizes: "Standard & Large",
    desc: "Traditional South Indian style plates made from pressed banana leaf pulp. 100% natural and biodegradable.",
    icon: "🌿",
  },
];

const PRODUCT_OPTIONS = PRODUCTS.map((p) => p.name);

// ─── PROCESS STEPS ───────────────────────────────────────────────────────────
const PROCESS_STEPS = [
  {
    step: 1,
    title: "Raw Material Sourcing",
    desc: "Sustainably sourced virgin pulp and recycled paper from certified suppliers across India.",
    icon: Leaf,
  },
  {
    step: 2,
    title: "Pulping & Mixing",
    desc: "Pulp is blended with water and eco-safe binding agents to achieve the right consistency.",
    icon: Droplets,
  },
  {
    step: 3,
    title: "Sheet Formation",
    desc: "The pulp mixture is spread evenly and dried into uniform sheets of precise thickness.",
    icon: Layers,
  },
  {
    step: 4,
    title: "Moulding & Pressing",
    desc: "Hydraulic presses mould sheets into the desired plate shapes under high precision.",
    icon: Factory,
  },
  {
    step: 5,
    title: "Drying & Finishing",
    desc: "Plates are oven-dried at controlled temperatures to ensure strength and moisture resistance.",
    icon: Thermometer,
  },
  {
    step: 6,
    title: "Quality Testing",
    desc: "Each batch undergoes rigorous testing for load capacity, food safety, and dimensional accuracy.",
    icon: ClipboardCheck,
  },
  {
    step: 7,
    title: "Packaging & Dispatch",
    desc: "Plates are hygienically packed in bulk and dispatched pan-India via our logistics network.",
    icon: Package,
  },
];

// ─── WHY US ───────────────────────────────────────────────────────────────────
const WHY_US = [
  {
    icon: Recycle,
    title: "100% Biodegradable",
    desc: "All our products decompose naturally within 60–90 days, leaving zero harmful residue.",
  },
  {
    icon: Shield,
    title: "BIS & ISO Certified",
    desc: "Fully compliant with Indian and international quality standards for food-grade packaging.",
  },
  {
    icon: Package,
    title: "Bulk Order Support",
    desc: "Capacity to handle large volumes — from 10,000 units to millions per month.",
  },
  {
    icon: Printer,
    title: "Custom Branding",
    desc: "Personalised printing with your logo and brand identity on any plate variant.",
  },
  {
    icon: TruckIcon,
    title: "Pan-India Delivery",
    desc: "Reliable delivery network covering all 28 states. Timely dispatch guaranteed.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    desc: "Factory-direct prices with volume discounts. No middlemen, no hidden charges.",
  },
];

// ─── CERTIFICATIONS ───────────────────────────────────────────────────────────
const CERTIFICATIONS = [
  { name: "ISO 9001:2015", icon: "🏅", desc: "Quality Management" },
  { name: "BIS Certified", icon: "🇮🇳", desc: "Bureau of Indian Standards" },
  { name: "FSSAI Approved", icon: "✅", desc: "Food Safety Standards" },
  { name: "Eco Mark", icon: "🌱", desc: "Eco-Friendly Product" },
  { name: "Made in India", icon: "🏭", desc: "Atmanirbhar Bharat" },
];

// ─── STATS ────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Product Variants" },
  { value: "10,000+", label: "Happy Clients" },
  { value: "100%", label: "Recyclable" },
];

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-forest-800 shadow-lg shadow-forest-900/30 py-2"
          : "bg-forest-900/80 backdrop-blur-sm py-4"
      }`}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 group"
          data-ocid="nav.link"
        >
          <div className="w-10 h-10 rounded-full bg-forest-500 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
            <Leaf className="w-5 h-5 text-cream-100" />
          </div>
          <div>
            <div className="font-display font-bold text-cream-100 text-lg leading-tight">
              Surendra
            </div>
            <div className="text-forest-200 text-xs leading-tight font-body">
              Paper Plate Industry
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-ocid="nav.link"
                className="px-4 py-2 text-forest-100 hover:text-cream-100 hover:bg-forest-700 rounded-lg text-sm font-body font-medium transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            data-ocid="nav.primary_button"
            className="hidden lg:flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2 rounded-full text-sm font-body font-semibold hover:opacity-90 transition-opacity"
          >
            Get a Quote <ArrowRight className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-cream-100 hover:bg-forest-700 transition-colors"
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-forest-800 border-t border-forest-700"
          >
            <ul className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-ocid="nav.link"
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-forest-100 hover:text-cream-100 hover:bg-forest-700 rounded-lg font-body font-medium transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="flex items-center gap-2 mt-2 bg-accent text-accent-foreground px-5 py-3 rounded-full text-sm font-body font-semibold"
                  data-ocid="nav.primary_button"
                >
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=1400&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-900/85 via-forest-900/70 to-forest-900/90" />

      {/* Floating leaf decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 15, 0] }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/6 text-6xl opacity-20"
        >
          🍃
        </motion.div>
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [0, -10, 0] }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 left-1/6 text-5xl opacity-15"
        >
          🌿
        </motion.div>
        <motion.div
          animate={{ y: [-10, 25, -10], rotate: [5, -5, 5] }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/3 right-1/4 text-4xl opacity-20"
        >
          ♻️
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Badge className="mb-6 bg-forest-600/60 text-forest-100 border-forest-500 backdrop-blur-sm px-4 py-1.5 text-sm">
            <Leaf className="w-3.5 h-3.5 mr-1.5" /> 100% Eco-Friendly
            Manufacturing
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-cream-100 mb-6 leading-tight max-w-5xl mx-auto"
        >
          Eco-Friendly Paper Plates
          <span className="block text-forest-300">for Every Occasion</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-body text-lg md:text-xl text-forest-200 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Surendra Paper Plate Industry delivers premium, BIS-certified, 100%
          biodegradable paper plates crafted with sustainable processes —
          serving India and beyond since 2009.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#products"
            data-ocid="hero.primary_button"
            className="group flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-base hover:opacity-90 transition-all duration-200 shadow-lg shadow-forest-900/40"
          >
            Explore Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            data-ocid="hero.secondary_button"
            className="flex items-center gap-2 border-2 border-cream-200/60 text-cream-100 px-8 py-4 rounded-full font-body font-semibold text-base hover:bg-cream-100/10 transition-all duration-200"
          >
            Get a Quote
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-forest-800/50 backdrop-blur-sm rounded-2xl px-4 py-5 border border-forest-600/40"
            >
              <div className="font-display text-3xl font-bold text-forest-300 mb-1">
                {stat.value}
              </div>
              <div className="font-body text-xs text-forest-200">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 rounded-full border-2 border-forest-400/60 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-forest-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-24 bg-cream-100 leaf-pattern">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Badge className="mb-4 bg-forest-100 text-forest-700 border-forest-200">
              <Leaf className="w-3.5 h-3.5 mr-1.5" /> Our Story
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Rooted in Nature,
              <span className="text-primary"> Built for Tomorrow</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
              Founded in 2009, Surendra Paper Plate Industry has grown from a
              small workshop in Jaipur into one of Rajasthan's most trusted
              paper plate manufacturers. Our journey began with a simple
              mission: to replace plastic with biodegradable alternatives
              without compromising on quality.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Today, we serve thousands of clients across India — from street
              food vendors to five-star hotels, from school canteens to
              corporate catering — all united by a shared commitment to a
              cleaner, greener Earth.
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: "🌱",
                  label: "Eco-Friendly",
                  desc: "Zero toxic materials",
                },
                {
                  icon: "⭐",
                  label: "Quality First",
                  desc: "BIS & ISO certified",
                },
                {
                  icon: "🤝",
                  label: "Reliability",
                  desc: "On-time every time",
                },
              ].map((v) => (
                <div
                  key={v.label}
                  className="bg-card rounded-2xl p-5 border border-border shadow-xs text-center"
                >
                  <div className="text-3xl mb-2">{v.icon}</div>
                  <div className="font-display font-semibold text-foreground text-sm">
                    {v.label}
                  </div>
                  <div className="font-body text-xs text-muted-foreground mt-1">
                    {v.desc}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image + decorative */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img
                src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=80"
                alt="Our manufacturing facility"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-2xl p-5 shadow-leaf">
              <div className="font-display text-4xl font-bold">15+</div>
              <div className="font-body text-sm opacity-80">
                Years of Excellence
              </div>
            </div>
            {/* Eco badge */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-xl px-4 py-2 shadow-leaf">
              <div className="font-body text-xs font-semibold">
                ♻️ 100% Recyclable
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── PRODUCTS ─────────────────────────────────────────────────────────────────
function Products() {
  return (
    <section id="products" className="py-24 bg-forest-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-forest-100 text-forest-700 border-forest-200">
            <Package className="w-3.5 h-3.5 mr-1.5" /> Our Range
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Premium Eco-Certified Products
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Every product in our range is manufactured with food-safe materials
            and carries our eco-certification for complete peace of mind.
          </p>
        </motion.div>

        {/* Featured image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden mb-16 shadow-card"
        >
          <img
            src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&q=80"
            alt="Our product range"
            className="w-full h-72 md:h-96 object-cover"
          />
        </motion.div>

        {/* Product cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              data-ocid={`products.item.${i + 1}`}
              className="group bg-card rounded-2xl p-6 border border-border shadow-xs hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{product.icon}</span>
                <Badge className="bg-forest-100 text-forest-700 border-forest-300 text-xs">
                  🌱 Eco-Certified
                </Badge>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-1">
                {product.name}
              </h3>
              <p className="font-body text-xs text-accent font-semibold mb-3">
                Sizes: {product.sizes}
              </p>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {product.desc}
              </p>
              <div className="mt-5 pt-4 border-t border-border">
                <a
                  href="#contact"
                  data-ocid={`products.item.${i + 1}`}
                  className="flex items-center gap-1.5 text-primary font-body text-sm font-semibold hover:gap-3 transition-all"
                >
                  Enquire Now <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PROCESS ──────────────────────────────────────────────────────────────────
function Process() {
  return (
    <section
      id="process"
      className="py-24 bg-forest-800 relative overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-forest-800/90" />

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-forest-600/50 text-forest-200 border-forest-600">
            <Factory className="w-3.5 h-3.5 mr-1.5" /> How We Make It
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream-100 mb-4">
            Our Manufacturing Process
          </h2>
          <p className="font-body text-forest-300 text-lg max-w-2xl mx-auto">
            A meticulous 7-step process ensuring every plate meets our gold
            standard for quality and sustainability.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-forest-600 hidden lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${
                    i > 0 ? "lg:-mt-4" : ""
                  }`}
                >
                  <div
                    className={`${isLeft ? "lg:text-right lg:pr-16" : "lg:col-start-2 lg:pl-16"}`}
                  >
                    <div
                      className={`bg-forest-700/60 backdrop-blur-sm rounded-2xl p-6 border border-forest-600/40 ${
                        isLeft ? "" : ""
                      }`}
                    >
                      <div
                        className="flex items-center gap-3 mb-3 lg:flex-row"
                        style={{
                          flexDirection: isLeft ? "row-reverse" : "row",
                        }}
                      >
                        <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-accent-foreground" />
                        </div>
                        <div>
                          <span className="font-body text-xs text-forest-400 font-semibold">
                            Step {step.step}
                          </span>
                          <h3 className="font-display text-lg font-bold text-cream-100">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className="font-body text-forest-300 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div
                    className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent items-center justify-center border-4 border-forest-800 z-10 font-display font-bold text-accent-foreground text-xs"
                    style={{ marginTop: `${i * 0}px` }}
                  >
                    {step.step}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── WHY US ───────────────────────────────────────────────────────────────────
function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-cream-200">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-forest-100 text-forest-700 border-forest-200">
            <Star className="w-3.5 h-3.5 mr-1.5" /> Why Choose Us
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Surendra Advantage
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by thousands of businesses across India for unmatched
            quality, reliability, and eco-commitment.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-card rounded-2xl p-7 border border-border shadow-xs hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-forest-100 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── CERTIFICATIONS ───────────────────────────────────────────────────────────
function Certifications() {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
            Certifications & Standards
          </h2>
          <p className="font-body text-forest-200 text-base">
            Our quality credentials speak for themselves.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-forest-700/40 backdrop-blur-sm border border-forest-500/40 rounded-2xl px-7 py-6 text-center min-w-32"
            >
              <div className="text-3xl mb-2">{cert.icon}</div>
              <div className="font-display text-base font-bold text-cream-100">
                {cert.name}
              </div>
              <div className="font-body text-xs text-forest-300 mt-1">
                {cert.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT FORM ─────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    productInterest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const { mutate, isPending, isError } = useSubmitEnquiry();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.productInterest) {
      toast.error("Please fill in all required fields.");
      return;
    }
    mutate(form, {
      onSuccess: () => {
        setSubmitted(true);
        toast.success("Enquiry sent! We'll get back to you within 24 hours.");
      },
      onError: () => {
        toast.error("Something went wrong. Please try again.");
      },
    });
  };

  return (
    <section id="contact" className="py-24 bg-cream-100 leaf-pattern">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-forest-100 text-forest-700 border-forest-200">
              <Send className="w-3.5 h-3.5 mr-1.5" /> Get in Touch
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Ready to Go Green
              <span className="text-primary"> Together?</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-10">
              Send us your requirements and our team will get back with a
              customized quote within 24 hours. Bulk discounts available for
              orders above 10,000 units.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: MapPin,
                  title: "Our Address",
                  text: "Plot No. 47, Industrial Area Phase II, Jhotwara, Jaipur, Rajasthan - 302012",
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  text: "+91 98765 43210 | +91 87654 32109",
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  text: "info@surendrapaperplate.in",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-forest-100 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-display font-semibold text-foreground">
                        {item.title}
                      </div>
                      <div className="font-body text-muted-foreground text-sm">
                        {item.text}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-card rounded-3xl p-8 shadow-card border border-border">
              {submitted ? (
                <div
                  data-ocid="contact.success_state"
                  className="text-center py-12"
                >
                  <div className="text-6xl mb-4">🌿</div>
                  <h3 className="font-display text-2xl font-bold text-primary mb-2">
                    Enquiry Sent!
                  </h3>
                  <p className="font-body text-muted-foreground">
                    Thank you for reaching out. Our team will contact you within
                    24 hours.
                  </p>
                  <Button
                    className="mt-6 bg-primary text-primary-foreground"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        productInterest: "",
                        message: "",
                      });
                    }}
                  >
                    Send Another Enquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-body font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        data-ocid="contact.input"
                        placeholder="Rajesh Kumar"
                        value={form.name}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, name: e.target.value }))
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-body font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        data-ocid="contact.input"
                        placeholder="rajesh@company.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, email: e.target.value }))
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-body font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      data-ocid="contact.input"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, phone: e.target.value }))
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="product" className="font-body font-medium">
                      Product Interest *
                    </Label>
                    <Select
                      value={form.productInterest}
                      onValueChange={(v) =>
                        setForm((p) => ({ ...p, productInterest: v }))
                      }
                    >
                      <SelectTrigger data-ocid="contact.select" id="product">
                        <SelectValue placeholder="Select a product..." />
                      </SelectTrigger>
                      <SelectContent>
                        {PRODUCT_OPTIONS.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                        <SelectItem value="Other">
                          Other / General Enquiry
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-body font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      data-ocid="contact.textarea"
                      placeholder="Tell us about your requirements — quantity, customisation, delivery timeline..."
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                    />
                  </div>

                  {isError && (
                    <div
                      data-ocid="contact.error_state"
                      className="bg-destructive/10 text-destructive rounded-lg px-4 py-3 text-sm font-body"
                    >
                      Something went wrong. Please try again or call us
                      directly.
                    </div>
                  )}

                  <Button
                    type="submit"
                    data-ocid="contact.submit_button"
                    disabled={isPending}
                    className="w-full bg-primary text-primary-foreground py-6 text-base font-body font-semibold rounded-xl hover:opacity-90 transition-opacity"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />{" "}
                        Sending Enquiry...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" /> Send Enquiry
                      </>
                    )}
                  </Button>

                  {isPending && (
                    <div
                      data-ocid="contact.loading_state"
                      className="text-center text-sm text-muted-foreground font-body"
                    >
                      Processing your enquiry...
                    </div>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  return (
    <footer className="bg-forest-900 text-forest-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-forest-600 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-cream-100" />
              </div>
              <div>
                <div className="font-display font-bold text-cream-100 text-lg leading-tight">
                  Surendra Paper Plate Industry
                </div>
              </div>
            </div>
            <p className="font-body text-forest-400 leading-relaxed mb-6 max-w-sm">
              India's trusted manufacturer of eco-friendly, biodegradable paper
              plates and packaging solutions since 2009.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "Twitter" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  type="button"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-cream-100 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-forest-400 hover:text-cream-100 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-cream-100 mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="font-body text-forest-400 text-sm">
                  Plot No. 47, Industrial Area Phase II, Jhotwara, Jaipur,
                  Rajasthan - 302012
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span className="font-body text-forest-400 text-sm">
                  +91 98765 43210
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span className="font-body text-forest-400 text-sm">
                  info@surendrapaperplate.in
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-forest-800">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-forest-500 text-sm">
            © {year} Surendra Paper Plate Industry. All Rights Reserved.
          </p>
          <p className="font-body text-forest-600 text-xs">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest-400 hover:text-cream-100 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="font-body">
      <Toaster position="top-right" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Process />
        <WhyUs />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
