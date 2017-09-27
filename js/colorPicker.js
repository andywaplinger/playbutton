$("#colorpicker").spectrum({
  flat: true,
  showInput: true,
  showPalette: false,
  preferredFormat: "hex",
  localStorageKey: "spectrum.logopicker",
  clickoutFiresChange: true,
  showButtons: false,
  move: function(color) {
    
     $('.play-button').css('fill',  color.toHexString())
  },
  change: function(color) {
    
     $('.play-button').css('fill',  color.toHexString())
  },
});
