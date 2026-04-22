import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { FeaturedCaseStudy } from './components/FeaturedCaseStudy/FeaturedCaseStudy';
import { About } from './components/About/About';
import { Expertise } from './components/Expertise/Expertise';
import { WorkApproach } from './components/WorkApproach/WorkApproach';
import { GrowthFocus } from './components/GrowthFocus/GrowthFocus';
import { Contact } from './components/Contact/Contact';
import { siteLinks } from './data/links';
import { featuredProjectMedia } from './data/projects';
import { useLanguage } from './hooks/useLanguage';
import { useTheme } from './hooks/useTheme';
import { getTranslation } from './i18n';

function App() {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = getTranslation(language);

  return (
    <div className="app-shell">
      <Header
        navigation={t.navigation}
        language={language}
        onLanguageChange={setLanguage}
        theme={theme}
        onThemeToggle={toggleTheme}
        links={siteLinks}
      />

      <main>
        <Hero content={t.hero} />
        <FeaturedCaseStudy content={t.caseStudy} media={featuredProjectMedia} />
        <About content={t.about} />
        <Expertise content={t.expertise} />
        <WorkApproach content={t.workApproach} />
        <GrowthFocus content={t.growth} />
        <Contact content={t.contact} links={siteLinks} />
      </main>
    </div>
  );
}

export default App;
