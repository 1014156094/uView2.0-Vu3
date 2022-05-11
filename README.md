## 说明
- `Vue3` 可运行
- 其他文档说明与 <a href="https://github.com/umicro/uView2.0">uView UI</a> 官方为准

## 使用方式
1. 拷贝 `uni_modules/uview-ui` 目录到你的项目
2. 在 `pages.json` 文件新增以下代码，配置 `easycom` 组件模式（https://www.uviewui.com/components/npmSetting.html#_5-cli模式额外配置）
    ```js
    // 例如
    "easycom": {
        "autoscan": true,
        "custom": {
            "^u-(.*)": "uni_modules/uview-ui/components/u-$1/u-$1.vue"
        }
    },
    ```