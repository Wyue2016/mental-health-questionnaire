module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16, // 基准大小，可以根据需要调整
      propList: ['*'], // 可以指定转换的属性，例如 ['font', 'font-size']，'*' 表示所有属性
      selectorBlackList: [] // 指定不转换的类名，例如 ['body']，表示不转换body类下的属性
    }
  }
};
