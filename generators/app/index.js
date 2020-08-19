const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);
    const pkg = require('../../package.json')
    if (pkg.version) {
      console.log('欢迎使用sci-fe-cli, 当前CLI版本：', pkg.version)
    }
  }
  prompting() {
    return this.prompt([
      {
        type: "input",
        name: "name",
        message: "请输入项目名称",
        default: "default-project-web",
      },
      {
        type: "input",
        name: "version",
        message: "请输入版本号",
        default: "1.0.0",
      },
      {
        type: "rawlist",
        name: "template",
        message: "选择模板",
        choices: [
          {
            name:
              "Vue2.0 + JavaScript + AntDv（含ElementUI和VantUI的配置文件）",
            value: "vue-js",
          },
          { name: "Vue2.0 + TypeScript + AntDv", value: "vue-ts" },
        ],
        default: 0,
      },
    ]).then((answers) => {
      this.answers = answers;
    });
  }
  writing() {
    console.log("正在处理...");
    const context = this.answers || {};
    let fileList = [];
    switch (this.answers.template) {
      case "vue-ts":
        fileList = require("./filelist/vue-ts.json");
        break;
      default:
        fileList = require("./filelist/vue-js.json");
        break;
    }
    fileList.forEach((el) => {
      const templatePath = this.answers.template + "/" + el;
      const targetPath = this.answers.name + "/" + el;
      const tmpl = this.templatePath(templatePath);
      const output = this.destinationPath(targetPath);
      this.fs.copyTpl(tmpl, output, context);
    });
  }
  end() {
    
    console.log(`
    ----------------------------------------------------------------
      模板生成完成，开发时候请严格参照《编码规范》进行开发。

      cd ${ this.answers.name }
      初始化： npm install  或 yarn install
      运行：npm run dev 或 yarn dev
      构建：npm run prod-build 或 yarn prod-build
    `);
  }
};
