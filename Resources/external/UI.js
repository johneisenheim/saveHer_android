var Tw = null;

function UI() {

}

UI.createCombobox = function(params) {
	var Combobox = require('external/Combobox');
	Combobox.TUInit(Tw);

	return new Combobox(params);
};

module.exports = UI;
