## Test app for Webpack + Rails integration

# Requirements

  - Ruby > 1.9
  - Node.js + bower

# Installation

    git clone git@github.com/mindreframer/webpack_and_rails.git
    cd webpack_and_rails

    # will install Gems + NPM packages + Bower packages
    bin/install

    # start webpack,
    # listen for changes in 'fe/' and automatically compile to 'public/webpack' folder
    make webpack

    # run Tests with Karma
    make karma




## Great Intros

  - http://okonet.github.io/viennajs-webpack-introduction
  - http://web-design-weekly.com/2014/09/24/diving-webpack/
  - http://peerigon.github.io/presentations/2014-07-09-MNUG-webpack/


  - https://www.reinteractive.net/posts/213-rails-with-webpack-why-and-how
  - http://www.railsonmaui.com/blog/2014/10/02/integrating-webpack-and-the-es6-transpiler-into-an-existing-rails-project/
  - https://medium.com/brigade-engineering/setting-up-webpack-with-rails-c62aea149679


  Webpack with

    - text-extraction for CSS files
    - will generate files into public/webpack


  Used:

    - lib/webpack_integration.rb (on-the-fly manifest generation + fuzzy matching for bundled files (also images!)) from any Ruby / Rails app


  Webpack (general)

    - https://gitter.im/webpack/webpack -> CHAT!
    - https://github.com/petehunt/webpack-howto
    - http://webpack.github.io/docs/optimization.html
    - http://webpack.github.io/docs/stylesheets.html
    - https://www.youtube.com/watch?v=VkTCL6Nqm6Y&feature=youtu.be (How Instagram.com works)

  Webpack Examples:

    - https://github.com/webpack/webpack/tree/master/examples

    - https://github.com/srn/react-webpack-boilerplate (great example for production / dev settings)
