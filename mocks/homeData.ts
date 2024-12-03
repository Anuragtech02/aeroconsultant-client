// mocks/homeData.ts
export const homeData = {
  data: {
    attributes: {
      hero: {
        title: "Global Aviation Solutions for Modern Operations",
        subtitle:
          "Streamline your aviation operations with expert CAMO services and cutting-edge digital solutions across 155+ countries.",
        buttons: [
          {
            title: "Explore Services",
            link: "/services",
            variant: "primary",
            iconPosition: "right",
            icon: {
              data: {
                attributes: {
                  url: "/api/placeholder/24/24",
                  width: 24,
                  height: 24,
                  alt: "Arrow Right Icon",
                },
              },
            },
          },
          {
            title: "Contact Us",
            link: "/contact",
            variant: "outline",
            iconPosition: "right",
            icon: {
              data: {
                attributes: {
                  url: "/api/placeholder/24/24",
                  width: 24,
                  height: 24,
                  alt: "Contact Icon",
                },
              },
            },
          },
        ],
        backgroundImage: {
          data: {
            attributes: {
              url: "/api/placeholder/1920/1080",
              width: 1920,
              height: 1080,
              alt: "Aircraft in hangar",
            },
          },
        },
      },
    },
  },
};
