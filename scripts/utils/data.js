const repositories = [
  {
    name:'almost-amazon',
    description: 'Nam lobortis diam sapien, vel eleifend ante commodo nec. Suspendisse tristique ultricies lectus vitae vulputate.',
    language: 'JavaScript',
    isPinned: false
  },
  {
    name:'pies',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet risus et est dictum interdum.',
    language: 'CSS',
    isPinned: false
  },
  {
    name:'js-intro',
    description: 'Nullam sit amet nulla id eros luctus molestie. Suspendisse id gravida ipsum, at dictum mi.',
    language: 'TypeScript',
    isPinned: false
  },
  {
    name:'gitsub',
    description: 'Integer finibus ante vel sodales ornare. Morbi nunc velit, sollicitudin quis mi et, dapibus condimentum.',
    language: 'Python',
    isPinned: false
  },
  {
    name:'product-cards',
    description: 'Quisque sapien lorem, rhoncus sit amet elit vel, ullamcorper dictum elit. Sed blandit porttitor mi.',
    language: 'C#',
    isPinned: true
  },
  {
    name:'pet-adoption',
    description: 'Sed et est porta, faucibus libero at, pellentesque ex. Integer eros velit, pharetra ac condimentum.',
    language: 'Ruby',
    isPinned: true
  },
  {
    name:'30-repos',
    description: 'Nam nec bibendum nunc. Nullam in turpis vitae dolor imperdiet ornare. Aliquam congue, metus nec.',
    language: 'C++',
    isPinned: true
  },
  {
    name:'sorting-hat',
    description: 'Proin euismod, augue ac ultrices placerat, augue nulla sagittis dui, vel cursus tortor nisi malesuada.',
    language: 'Go',
    isPinned: true
  },
];

const packages = [
    {
        name: "Docker",
        description: "A software platform used for building applications based on containers — small and lightweight execution environments."
    },
    {
        name: "RubyGems",
        description: "A standard format for distributing Ruby programs and libraries used for the Ruby programming language."
    },
    {
        name: "Apache Maven",
        description: "A default package manager used for the Java programming language and the Java runtime environment."
    },
    {
        name: "NuGet",
        description: "A free and open source package manager used for the Microsoft development platforms including .NET."
    },
    {
        name: "npm",
        description: "A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code."
    },
    {
        name: "Containers",
        description: "A single place for your team to manage Docker images and decide who can see and access your images."
    },
];

const projects = [
    {
        name: 'Example',
        description: 'No description'
    },

    {
        name: 'Test Project',
        description: 'This is a test'
    },

    {
        name: 'Sample My Goals',
        description: 'Goals for the NSS Bootcamp'
    }
];

const userObj = {
  name: 'Monica Powell',
  profileImage: 'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2020-02/the-easiest-loaf-of-bread-youll-ever-bake.jpg?itok=j89yDeId',
  username: 'M0nica',
  description: 'Building tech to elevate people. Founder of React Ladies a community for React JS developers.',
  followers: 123123,
  following: 12312,
  starred: 23434,
  location: 'Nashville, TN',
  email: 'test@email.com',
  website: 'https://gitsub-codecrushers.netlify.app',
  twitter: 'twitter',
};

export {
  repositories,
  packages,
  projects,
  userObj,
};
