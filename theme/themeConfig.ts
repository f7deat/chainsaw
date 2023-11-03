import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: '#1890ff'
  },
  components: {
    Input: {
        borderRadiusLG: 48
    },
    Layout: {
      colorBgHeader: '#FFF',
      colorBgBody: '#FFF'
    }
  }
};

export default theme;