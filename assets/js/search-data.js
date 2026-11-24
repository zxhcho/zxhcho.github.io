// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-our-work-about-curve-design-on-manifold-versatile-curve-design-by-level-set-with-quadratic-convergence-is-accepted-by-tvcg",
          title: 'Our work about curve design on manifold, “Versatile Curve Design by Level Set...',
          description: "",
          section: "News",},{id: "news-our-work-about-data-driven-quad-mesh-topology-customization-learning-sparse-singularities-for-cross-field-design-is-accepted-by-tog",
          title: 'Our work about data-driven quad mesh topology customization, “Learning Sparse Singularities for Cross...',
          description: "",
          section: "News",},{id: "news-i-received-my-ph-d-from-zhejiang-university-cad-amp-amp-cg-lab-and-joined-tencent-ieg-qingyun-program-on-3d-aigc",
          title: 'I received my Ph.D. from Zhejiang University CAD&amp;amp;amp;CG Lab, and joined Tencent IEG...',
          description: "",
          section: "News",},{id: "news-our-work-about-pde-prior-driven-anisotropic-meshing-learning-discrete-riemannian-metric-for-problem-aware-meshing-is-accepted-by-pacific-graphics-2026-and-will-appear-in-computer-graphics-forum",
          title: 'Our work about PDE prior driven anisotropic meshing, “Learning Discrete Riemannian Metric for...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%78%69%61%6F%68%75%7A%68%61%6E%67@%7A%6A%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/zxhcho", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
