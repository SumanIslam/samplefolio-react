// 0 - 600px:          Phone
// 600px - 900px       Table Portrait
// 900px - 1200px      Table Landscape
// [1200px - 1800px]   Desktop Normal Styles
// 1800px +            Big Desktop

const size = {
 phone_xs: '320px', // Small phone
 phone: '600px', // Phone
 tab_port_sm: '768px', // Tablet small
 tab_port: '900px', // Tablet portrait
 tab_land: '1200px', // Tablet Landscape
 big_desktop: '1800px' // Big desktop
}
const device = {
 phone_xs: `(max-width: ${size.phone_xs})`,
 phone: `(max-width: ${size.phone})`,
 tab_port_sm: `(max-width: ${size.tab_port_sm})`,
 tab_port: `(max-width: ${size.tab_port})`,
 tab_land: `(max-width: ${size.tab_land})`,
 big_desktop: `(min-width: ${size.big_desktop})`,
}
const breakpoint = {
  size,
  device
}
export default breakpoint;
