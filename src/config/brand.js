export const brand = {
    name: "Kybrant",
    colors: {
        primary: "#006D5B",
        secondary: "#004C4C",
        accent: "#B2D8D8",
        background: "#080c10", // Deep dark background for dark mode default
        surface: "#121820", // Slightly lighter for cards/glass panels
        textNeutral: "#F8F9FA",
        textDark: "#242424",
    },
    typography: {
        heading: "'Space Grotesk', system-ui, sans-serif",
        body: "'Inter', system-ui, sans-serif"
    },
    // Function to inject CSS variables into the document
    applyTheme: function () {
        const root = document.documentElement;
        Object.entries(this.colors).forEach(([key, value]) => {
            // Map camelCase to kebab-case, e.g., textNeutral -> --color-text-neutral
            const cssVar = '--color-' + key.replace(/([A-Z])/g, '-$1').toLowerCase();
            root.style.setProperty(cssVar, value);
        });

        root.style.setProperty('--font-heading', this.typography.heading);
        root.style.setProperty('--font-body', this.typography.body);
    }
};
