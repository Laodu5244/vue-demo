class Vue {
  // 通过el获取根节点
  constructor(options) {
    this.$el = document.querySelector(options.el);
    this.$data = options.data;
    this.$options = options;
    this.$watchEvent = {};
    this.proxyData();
    this.observe();
    this.compile(this.$el);
  }

  // 劫持data中的属性,并且给Vue对象赋值
  proxyData() {
    for (let key in this.$data) {
      Object.defineProperty(this, key, {
        get() {
          return this.$data[key];
        },
        set(val) {
          this.$data[key] = val;
        }
      })
    }
  }

  // 劫持数据变化,进行更新视图
  observe() {
    for (let key in this.$data) {
      let value = this.$data[key];
      let that = this;
      Object.defineProperty(this.$data, key, {
        get() {
          return value;
        },
        set(val) {
          value = val;
          // 如果更新,执行update方法
          if (that.$watchEvent[key]) {
            that.$watchEvent[key].forEach((item, index) => {
              item.update();
            })
          }

        }
      })
    }
  }

  // 编译解析
  compile(node) {
    // 循环所有元素(标签,文本,空格回车等等)
    node.childNodes.forEach((item, index) => {
      // nodeType==>1是元素节点
      if (item.nodeType === 1) {

        // 添加点击事件
        if (item.hasAttribute("@click")) {
          let vmKey = item.getAttribute("@click").trim();
          item.addEventListener('click', (event) => {
            this.eventFn = this.$options.methods[vmKey].bind(this);
            this.eventFn(event);
          })
        }

        // 判断v-model
        if (item.hasAttribute("v-model")) {
          let vmKey = item.getAttribute("v-model").trim();
          item.value = this[vmKey];
          item.addEventListener('input', (event) => {
            this[vmKey] = item.value;
          })
        }

        if (item.childNodes.length > 0) {
          this.compile(item);
        }
      }

      // nodeType==>3是文本节点
      if (item.nodeType === 3) {
        // 用正则表达式匹配,指定编译双括号里的内容
        let reg = /\{\{(.*?)\}\}/g;
        let text = item.textContent;
        item.textContent = text.replace(reg, (match, vmKey) => {
          // trim(): 忽略空格等
          vmKey = vmKey.trim();

          if (this.hasOwnProperty(vmKey)) {
            let watcher = new Watch(this, vmKey, item, 'textContent');
            if (this.$watchEvent[vmKey]) {
              this.$watchEvent[vmKey].push(watcher);
            } else {
              this.$watchEvent[vmKey] = [];
              this.$watchEvent[vmKey].push(watcher);
            }
          }
          return this.$data[vmKey];
        })
      }
    })
  }
}

// 更新视图
class Watch {
  constructor(vm, key, node, attr) {
    // Vue对象
    this.vm = vm;
    // data的数据
    this.key = key;
    // 节点
    this.node = node;
    // textContent
    this.attr = attr;
  }
  // 数据发生改变,更新视图
  update() {
    this.node[this.attr] = this.vm[this.key];
  }
}

