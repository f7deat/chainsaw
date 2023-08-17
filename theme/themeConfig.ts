import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: '#1890ff'
  },
  components: {
    Input: {
        borderRadiusLG: 48,
        colorBorder: '#1890ff'
    }
  }
};

export default theme;