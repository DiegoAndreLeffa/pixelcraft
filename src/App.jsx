import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

import bg from "./assets/bg.png";
import cheffacil1 from "./assets/Cheffacilescuro.png";
import cheffacil2 from "./assets/Cheffacilclaro.png";
import glowbottle from "./assets/glowbottle.png";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: url(${bg}) no-repeat center center fixed;
    background-size: cover;
    color: #ffffff;
    font-family: "Poppins", sans-serif;
    transition: background 0.3s, color 0.3s;
    display: flex;
  }
`;

const theme = {
  text: "#ffffff",
  card: "#1f1f1f",
  highlight: "#ffffff",
  sidebar: "#1a1a1a",
};

const Sidebar = styled.nav`
  width: 250px;
  background: ${theme.sidebar};
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  z-index: 100;
  border-right: 1px solid ${theme.highlight}30;
`;

const Logo = styled.h1`
  font-size: 2rem;
  color: ${theme.highlight};
  font-weight: 900;
`;

const NavLink = styled.a`
  color: ${theme.text};
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s;
  &:hover {
    color: ${theme.highlight};
  }
`;

const Content = styled.div`
  margin-left: 250px;
  width: calc(100% - 250px);
`;

const Section = styled.section`
  padding: 6rem 3rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeroTitle = styled.h2`
  font-size: 3.5rem;
  color: ${theme.highlight};
  font-weight: 800;
`;

const HeroText = styled.p`
  max-width: 700px;
  margin-top: 1rem;
  font-size: 1.2rem;
  line-height: 1.6;
`;

const CTAButton = styled.a`
  margin-top: 2rem;
  padding: 1rem 2rem;
  background: ${theme.highlight};
  color: rgb(0, 0, 0);
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  transition: 0.3s;
  display: inline-block;
  max-width: 250px;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 15px ${theme.highlight};
  }
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${theme.highlight};
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const Card = styled(motion.div)`
  background: ${theme.card};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 8px #00000020;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  &:hover {
    transform: translateY(-5px);
	}
	p{
		text-aling: center;
		font-size: 12px;
		
	}
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 1rem;
  }
`;

const CardLink = styled.a`
  margin-top: 1rem;
  display: inline-block;
  color: ${theme.highlight};
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s, transform 0.3s;

  &:hover {
    color: #fff;
    transform: translateY(-2px);
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2rem;
  font-size: 0.9rem;
  color: ${theme.text}80;
`;

export default function PixelCraftPage() {
  return (
    <>
      <GlobalStyle />
      <Sidebar>
        <Logo>PixelCraft</Logo>
        <NavLink href="#home">Início</NavLink>
        <NavLink href="#services">Serviços</NavLink>
        <NavLink href="#portfolio">Portfólio</NavLink>
        <NavLink href="#contato">Contato</NavLink>
      </Sidebar>

      <Content>
        <Section id="home">
          <HeroTitle>Transformamos pixels em experiências.</HeroTitle>
          <HeroText>
            Na PixelCraft, criamos soluções digitais que encantam, convertem e
            fortalecem marcas. Somos especialistas em interfaces modernas,
            identidade visual impactante e desenvolvimento de sites com
            performance e responsividade impecáveis.
          </HeroText>
          <CTAButton href="#contato">Solicite um orçamento</CTAButton>
        </Section>

        <Section id="services">
          <SectionTitle>Serviços</SectionTitle>
          <Cards>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?ga=GA1.1.1120564479.1729598634&semt=ais_hybrid&w=740"
                alt="UI Design"
              />
              <h4>UI/UX Design</h4>
              <p>
                Criação de interfaces intuitivas, modernas e centradas na
                experiência do usuário.
              </p>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_23-2149365021.jpg?ga=GA1.1.1120564479.1729598634&semt=ais_hybrid&w=740"
                alt="Dev"
              />
              <h4>Desenvolvimento Web</h4>
              <p>
                Desenvolvimento de sites institucionais, portfólios e landing
                pages sob medida.
              </p>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="https://img.freepik.com/free-vector/simple-modern-business-stationery_52683-29461.jpg?ga=GA1.1.1120564479.1729598634&semt=ais_hybrid&w=740"
                alt="Branding"
              />
              <h4>Identidade Visual</h4>
              <p>
                Logotipos e sistemas visuais que expressam a essência da sua
                marca com personalidade e consistência.
              </p>
            </Card>
          </Cards>
        </Section>

        <Section id="portfolio">
          <SectionTitle>Portfólio</SectionTitle>
          <Cards>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <img src={glowbottle} alt="Projeto 1" />
              <h4>Landing Page - GlowBottle</h4>
              <p>
                Landing para lançamento de produto com foco em conversão e
                mobile-first.
              </p>
              <CardLink
                href="https://glowbottle.vercel.app"
                target="_blank"
              >
                Acessar Projeto
              </CardLink>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div
                style={{ display: "flex", gap: "0.5rem" }}
              >
                <img
                  src={cheffacil1}
                  alt="Projeto 2"
                  style={{
                    width: "50%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <img
                  src={cheffacil2}
                  alt="Projeto 2"
                  style={{
                    width: "50%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </div>
              <h4>Website - Plataforma de Eventos</h4>
              <p>
                Interface responsiva para gerenciamento de eventos com painel de
                controle.
              </p>
              <CardLink
                href="https://cheffacil.vercel.app"
                target="_blank"
              >
                Acessar Projeto
              </CardLink>
            </Card>
          </Cards>
        </Section>

        <Section id="contato">
          <SectionTitle>Contato</SectionTitle>
          <p>Email: contato@pixelcraft.studio</p>
          <p>Instagram: @pixelcraft.agency</p>
        </Section>

        <Footer>© 2025 PixelCraft Studio. Todos os direitos reservados.</Footer>
      </Content>
    </>
  );
}
