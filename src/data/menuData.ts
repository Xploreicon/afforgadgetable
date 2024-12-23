export interface IMenuData {
  name: string;
  url: string;
  submenu?: IMenuData[];
}
const menuData: IMenuData[] = [
  { name: 'HOME', url: '/' },
  { name: 'SHOP', url: '/shop' },
  { name: 'COMPARE', url: '/COMPARE' },
  {
    name: 'CATEGORY',
    url: '/category',
    submenu: [
      { name: 'Gaming consoles', url: '/category/consoles' },
      { name: 'Phone', url: '/category/phone' },
      { name: 'Accessories', url: '/category/accessories' },
      { name: 'Headphone', url: '/category/headphone' },
    ],
  },
  { name: 'ABOUT US', url: '/about' },
];
export default menuData;
