"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import { Box, Code, Film, Lightbulb, Palette, Sparkles, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="medium"
        background="noiseDiagonalGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Gallery",
          id: "#gallery",
        },
        {
          name: "Projects",
          id: "#projects",
        },
        {
          name: "News",
          id: "#news",
        },
        {
          name: "Skills",
          id: "#skills",
        },
        {
          name: "Experience",
          id: "#experience",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="MAMUN."
      button={{
        text: "Get In Touch",
        href: "#contact",
      }}
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitTestimonial
      useInvertedBackground={false}
      background={{
        variant: "glowing-orb",
      }}
      title="COMMANDING ATTENTION."
      description="I don't just design; I command digital attention. Crafting luxury experiences that dominate the screen."
      testimonials={[
        {
          name: "Sarah Johnson",
          handle: "@TechRecruiter",
          testimonial: "Mamun's portfolio is a masterclass in interactive design. The 3D animations truly bring his projects to life, showcasing a unique blend of technical skill and creative vision.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/studio-portrait-blond-female-dressed-white-shirt-red-eyeglasses_613910-3571.jpg",
          imageAlt: "Sarah Johnson",
        },
        {
          name: "Michael Chen",
          handle: "@DesignVisionary",
          testimonial: "Working with Mamun was an immersive experience. His reactive web elements and attention to detail transformed our project into a digital masterpiece. Highly recommended for bespoke design.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/couple-relaxing-home_23-2149129084.jpg",
          imageAlt: "Michael Chen",
        },
        {
          name: "Emily Rodriguez",
          handle: "@CodeInnovator",
          testimonial: "The interactivity and performance in Mamun's work are outstanding. His projects demonstrate a deep understanding of modern web technologies, pushing the boundaries of what's possible online.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-female-office-worker-black-strict-jacket-holding-using-her-laptop-light-pink-wall_140725-58690.jpg",
          imageAlt: "Emily Rodriguez",
        },
        {
          name: "David Kim",
          handle: "@HiringLead",
          testimonial: "Mamun's portfolio stands out in a crowded field. The dynamic visuals are not just aesthetically pleasing but also effectively communicate the complexity and innovation behind his full-stack solutions.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-happy-middle-aged-business-leader_1262-4823.jpg",
          imageAlt: "David Kim",
        },
        {
          name: "Jessica Lee",
          handle: "@CreativePartner",
          testimonial: "Collaborating with Mamun on creative projects is always inspiring. His ability to integrate 3D animation with fluid UX makes every experience unforgettable and truly commands attention.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/going-out-concept-with-girl-night_23-2148140754.jpg",
          imageAlt: "Jessica Lee",
        },
      ]}
      tag="GROUNDBREAKING CREATIVE PORTFOLIO"
      buttons={[
        {
          text: "View My Work",
          href: "#projects",
        },
        {
          text: "Get In Touch",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/aesthetic-background-with-light-sunset-projector-lamp_53876-108129.jpg"
      imageAlt="Interactive 3D Animated Portfolio Background"
      mediaAnimation="slide-up"
      tagIcon={Sparkles}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/cartoon-student-math-class_23-2151641231.jpg",
          alt: "Cartoon student in a math class",
        },
        {
          src: "http://img.b2bpic.net/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100250.jpg",
          alt: "Androgynous avatar of non-binary queer person",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cartoon-man-wearing-glasses_23-2151136888.jpg",
          alt: "Cartoon man wearing glasses",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-man-christmas-celebrations_23-2150936477.jpg",
          alt: "Portrait of man during christmas celebrations",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-hacker_23-2148165894.jpg",
          alt: "Portrait of hacker",
        },
      ]}
      avatarText="Featured by Industry Leaders"
      marqueeItems={[
        {
          type: "text-icon",
          text: "Full Stack Development",
          icon: Code,
        },
        {
          type: "text-icon",
          text: "Creative Video Editing",
          icon: Film,
        },
        {
          type: "text-icon",
          text: "3D Art & Animation",
          icon: Box,
        },
        {
          type: "text-icon",
          text: "UI/UX Design",
          icon: Palette,
        },
        {
          type: "text-icon",
          text: "Digital Strategy",
          icon: Lightbulb,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="About Me"
      description="I don't just design; I command digital attention. Crafting luxury experiences that dominate the screen. On the way to Full Stack Dev & Editor, I transform ideas into reality through innovative design and cutting-edge technology."
      metrics={[
        {
          value: "3+",
          title: "Featured Projects",
        },
        {
          value: "2+",
          title: "Years Experience",
        },
        {
          value: "24+",
          title: "Technologies",
        },
      ]}
      imageSrc="https://drive.google.com/thumbnail?id=1aHohdafJv40H1rKgKxlCoyUQF0J2dZ9l&sz=w1000&_wi=1"
      imageAlt="MD Mamun Akhtar Profile Image"
      mediaAnimation="slide-up"
      metricsAnimation="blur-reveal"
    />
  </div>

  <div id="skills" data-section="skills">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Frontend Development",
          description: "Crafting seamless user interfaces with modern frameworks like React, Next.js, and a keen eye for responsive design using TypeScript and Tailwind CSS.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/ui-ux-representations-with-smartphone_23-2150201873.jpg",
            imageAlt: "Frontend development UI",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/representations-user-experience-interface-design_23-2150104494.jpg",
            imageAlt: "Frontend development interactive components",
          },
          imageSrc: "https://drive.google.com/thumbnail?id=1aHohdafJv40H1rKgKxlCoyUQF0J2dZ9l&sz=w1000&_wi=2",
          imageAlt: "react nextjs mobile ui",
        },
        {
          title: "Backend & Database",
          description: "Building robust server-side applications with Node.js and Python, managing data efficiently with MongoDB, and deploying scalable solutions on AWS and Docker.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/selective-focus-shelves-full-with-criminology-reports-background-detective-analyzing-crime-scene-evidence-african-american-inspector-working-missing-person-case-arhive-room_482257-62935.jpg",
            imageAlt: "Backend development code",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/close-up-computers-data-center-running-server-rigs-diagnostic-tests_482257-123527.jpg",
            imageAlt: "Docker and AWS infrastructure",
          },
          imageSrc: "https://drive.google.com/thumbnail?id=16j1m2kNhG-OXIeFSSIcTeaOLSruoy6t4&sz=w1000&_wi=1",
          imageAlt: "react nextjs mobile ui",
        },
        {
          title: "Design & Video Editing",
          description: "Transforming concepts into stunning visuals using Figma, mastering video production with Adobe Premiere and DaVinci Resolve, and creating immersive 3D content with Blender & Cinema 4D.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/modern-robot-with-final-piece-jigsaw-puzzle_1048-3538.jpg",
            imageAlt: "Figma UI/UX design",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/videographer-using-editing-software-color-correcting_482257-121794.jpg",
            imageAlt: "Video editing timeline",
          },
          imageSrc: "https://img.youtube.com/vi/xcaiSpelMow/hqdefault.jpg?_wi=1",
          imageAlt: "react nextjs mobile ui",
        },
      ]}
      showStepNumbers={true}
      title="Skills & Expertise"
      description="Domain Expertise - Web & Digital, Brand Authority. A visual showcase of my work and the technologies I master across different disciplines."
    />
  </div>

  <div id="projects" data-section="projects">
      <ProductCardFour
      animationType="scale-rotate"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "ecofoodwise",
          name: "EcoFoodWise",
          price: "2025",
          variant: "Strategy & Design - App Development",
          imageSrc: "https://drive.google.com/thumbnail?id=16j1m2kNhG-OXIeFSSIcTeaOLSruoy6t4&sz=w1000&_wi=2",
          imageAlt: "EcoFoodWise App Interface",
        },
        {
          id: "dynamic-edit",
          name: "Dynamic Edit",
          price: "2025",
          variant: "Interactive Content - Video Production",
          imageSrc: "https://img.youtube.com/vi/xcaiSpelMow/hqdefault.jpg?_wi=2",
          imageAlt: "Dynamic Edit Video Still",
        },
        {
          id: "cinematic-visuals",
          name: "Cinematic Visuals",
          price: "2024",
          variant: "Brand Identity - Art Direction",
          imageSrc: "https://scontent.frdp4-1.fna.fbcdn.net/v/t51.75761-15/508403709_18040790546635987_8867798595644940648_n.webp?stp=dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=eD64iNmNEmYQ7kNvwEtosdm&_nc_oc=AdnnbXum8N2gkS7nG6ldjUbhme3jC2sM64x-VIjpsTVDYArNAZd-d2UIqchKRlnihYzQI_iMbReM2tCW4WeHzwQF&_nc_zt=23&_nc_ht=scontent.frdp4-1.fna&_nc_gid=tLP8iMsT9H8ar9OqfoJNhg&oh=00_Afld0txVqMDTdExb90Q07wsFZuuD6TeckgYedgJ4FFdCZQ&oe=69344DE6",
          imageAlt: "Cinematic Visuals Brand Identity",
        },
        {
          id: "app-development",
          name: "Modern App Dev",
          price: "2023",
          variant: "Full-Stack Mobile App Development",
          imageSrc: "http://img.b2bpic.net/free-photo/ui-ux-representations-with-smartphone_23-2150201865.jpg",
          imageAlt: "Modern App Development",
        },
        {
          id: "3d-modeling",
          name: "Abstract 3D Models",
          price: "2024",
          variant: "Blender & Cinema 4D Creations",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-illustrator-drawing-ipad_23-2150172075.jpg",
          imageAlt: "Abstract 3D Models",
        },
        {
          id: "web-design",
          name: "Innovative Web Design",
          price: "2025",
          variant: "Responsive UX/UI for Digital Platforms",
          imageSrc: "http://img.b2bpic.net/free-photo/wood-letters-word-corporate-strategy-notebook_1357-265.jpg",
          imageAlt: "Innovative Web Design",
        },
      ]}
      title="Featured Projects"
      description="A showcase of my recent work that blends strategic design with cutting-edge development to command digital attention."
    />
  </div>

  <div id="news" data-section="news">
      <BlogCardOne
      textboxLayout="default"
      useInvertedBackground={false}
      title="News & Events"
      description="Stay updated with my latest projects, milestones, and insights into innovative design and technology."
      blogs={[
        {
          id: "news-1",
          category: "NEWS",
          title: "EcoFoodWise Launch - Strategy & Design Excellence",
          excerpt: "Proud to announce the launch of EcoFoodWise, a revolutionary app development project showcasing strategic thinking and exceptional design. This project demonstrates my expertise in creating impactful digital experiences.",
          imageSrc: "http://img.b2bpic.net/free-photo/technology-app-development-wireless-e-commerce_53876-124044.jpg",
          imageAlt: "EcoFoodWise App Launch",
          authorName: "Mamun Akhtar",
          authorAvatar: "http://img.b2bpic.net/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100257.jpg",
          date: "2025-01-15",
        },
        {
          id: "news-2",
          category: "EVENT",
          title: "Dynamic Edit - Video Production Mastery",
          excerpt: "Released Dynamic Edit, showcasing my skills in interactive content creation and video production. This project highlights the fusion of technical expertise and creative vision.",
          imageSrc: "http://img.b2bpic.net/free-photo/female-photographer-blurred-models_23-2148565568.jpg",
          imageAlt: "Dynamic Edit Video Production",
          authorName: "Mamun Akhtar",
          authorAvatar: "http://img.b2bpic.net/free-photo/portrait-hacker_23-2148165939.jpg",
          date: "2025-01-10",
        },
        {
          id: "news-3",
          category: "NEWS",
          title: "Cinematic Visuals - Brand Identity Excellence",
          excerpt: "Completed Cinematic Visuals project, demonstrating mastery in brand identity and art direction. This work showcases the ability to create compelling visual narratives that command attention.",
          imageSrc: "http://img.b2bpic.net/free-photo/black-liquid-marble-background-handmade-acrylic-paint_53876-104546.jpg",
          imageAlt: "Cinematic Visuals Branding",
          authorName: "Mamun Akhtar",
          authorAvatar: "http://img.b2bpic.net/free-photo/cartoon-man-wearing-glasses_23-2151136853.jpg",
          date: "2024-12-20",
        },
        {
          id: "news-4",
          category: "EVENT",
          title: "Portfolio Established - Beginning the Journey",
          excerpt: "Established in 2023, beginning the journey as a Full Stack Developer & Editor. Committed to building digital empires and commanding attention through exceptional work.",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-laptop-dark-background-with-bokeh_169016-43169.jpg",
          imageAlt: "Portfolio Established",
          authorName: "Mamun Akhtar",
          authorAvatar: "http://img.b2bpic.net/free-photo/cybersecurity-expert-apartment-uses-computer-look-security-liabilities_482257-101155.jpg",
          date: "2023-01-01",
        },
      ]}
    />
  </div>

  <div id="partners" data-section="partners">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Google",
        "Wix",
        "Adobe",
        "React",
        "Node.js",
        "Tailwind",
        "Next.js",
        "Vercel",
        "TypeScript",
        "MongoDB",
        "Figma",
        "GitHub",
      ]}
      title="Partners & Clients"
      description="Trusted by leading organizations and built with the industry's most powerful technologies."
      showCard={true}
      tag="TECHNOLOGY PARTNERS"
      tagIcon={Users}
    />
  </div>

  <div id="experience" data-section="experience">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "exp-1",
          title: "2025 - Present: B.Sc. Computer Science at Malda College",
          content: "Pursuing Bachelor's degree in Computer Science, building expertise in full-stack development and software engineering, focusing on cutting-edge technologies and innovative problem-solving.",
        },
        {
          id: "exp-2",
          title: "2024 - 2025: Higher Secondary at Naimouza High School",
          content: "Completed Higher Secondary education, laying a strong academic foundation for advanced studies in computer science and sharpening analytical skills.",
        },
        {
          id: "exp-3",
          title: "2023: Madhyamik at Bright Institute",
          content: "Completed secondary education, marking the beginning of my journey in technology and creative work, inspiring a passion for digital innovation and development.",
        },
      ]}
      title="Experience & Timeline"
      description="My professional journey, highlighting academic achievements and foundational experiences that shaped my skills."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Let's Connect"
      title="Get In Touch"
      description="Ready to build digital empires together? Reach out to collaborate on your next groundbreaking project and command digital attention."
      buttons={[
        {
          text: "Email Me: mamunyt2006@gmail.com",
          href: "mailto:mamunyt2006@gmail.com",
        },
        {
          text: "View Socials",
          href: "https://github.com/MamunFarhat",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="MAMUN."
      columns={[
        {
          title: "Quick Links",
          items: [
            {
              label: "Home",
              href: "#home",
            },
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Projects",
              href: "#projects",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Use",
              href: "#",
            },
          ],
        },
        {
          title: "Follow Us",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/MamunFarhat",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/md.mamunakhtar.200610",
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/@aj_mamun_king",
            },
          ],
        },
      ]}
      copyrightText="&copy; 2025 MD MAMUN AKHTAR. Imperial Edition. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
