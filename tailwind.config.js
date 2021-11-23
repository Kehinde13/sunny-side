module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('/images/desktop/image-header.jpg')",
        'cone': "url('images/desktop/image-gallery-cone.jpg')",
        'milkbottles': "url('images/desktop/image-gallery-milkbottles.jpg')",
        'orange': "url('images/desktop/image-gallery-orange.jpg')",
        'sugar': "url('images/desktop/image-gallery-sugarcubes.jpg')",
        'design': "url('images/desktop/image-graphic-design.jpg')",
        'photography': "url('images/desktop/image-photography.jpg')",
        'stand': "url('images/desktop/image-stand-out.jpg')",
        'transform': "url('images/desktop/image-transform.jpg')",
        'smallheader': "url('images/mobile/image-header.jpg')",
        'smalldesign': "url('images/mobile/image-graphic-design.jpg')",
        'smallphotography': "url('images/mobile/image-photography.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
