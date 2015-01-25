var Tw = null;

function PickerPopup(title, values, multiple) {
	var _self = null;
	var _values = values;
	var _value = '';
	var _selidx = -1;
	var _multiple = multiple;

	var _tvValues = null;
	var _btnCancel = null;
	var _btnDone = null;
	var _toolbar = null;

	_self = Ti.UI.createWindow({
		backgroundColor : 'white',
		layout : 'vertical'
	});
	if (!_multiple) {
		var trans = Titanium.UI.create2DMatrix();
		trans = trans.scale(0);
		_self.fullscreen = false;
		_self.top = 25;
		_self.backgroundColor = 'transparent';
		_self.width = Ti.UI.FILL;
		_self.height = Ti.UI.SIZE;
		_self.opacity = 1;
		_self.navBarHidden = true;
		_self.bottom = 25;
	}

	_btnCancel = Ti.UI.createButton({
		title : L('cancel'),
		height : 25,
		top : 2,
		left : 20,
		//style : Ti.UI.iPhone.SystemButtonStyle.BORDERED
	});

	_btnDone = Ti.UI.createButton({
		title : L('selected'),
		height : 25,
		top : 2,
		right : 20,
		//style : Ti.UI.iPhone.SystemButtonStyle.BORDERED
	});

	var spacer = Ti.UI.createButton({
		systemButton : Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
	});

	_toolbar = Ti.UI.iOS.createToolbar({
		items : [_btnCancel, spacer, _btnDone],
		backgroundColor : '#777',
		top : 0,
		borderTop : false,
		borderBottom : true
	});
	if (_multiple) {
		_self.add(_toolbar);
	}

	var data = [];
	var seletedExclude = false;
	var seletedExcludeCount = 0;
	for (var i = 0; i < _values.length; i++) {
		if (_values[i].value == 'exclude') {
			seletedExclude = true;
			seletedExcludeCount++;
		}
		if (_values[i].value != 'exclude') {
			data.push({
				title : _values[i].title
			});
		}
	}

	var v = Ti.UI.createView({
		left : 0,
		right : 0,
		bottom : 0,
		height : Ti.UI.FILL
	});

	_tvValues = Ti.UI.createTableView({
		data : data,
		borderWidth : 1,
		borderColor : '#000',
		borderRadius : 5,
		//top : 5,
		left : 5,
		right : 5,
		//bottom : 5,
		allowSelection : true,
		height : Ti.UI.SIZE
	});
	var auxRow;
	_tvValues.addEventListener('click', function(e) {

		if (!_multiple) {
			e.row.backgroundColor = '#ff6600';
			e.row.hasCheck = true;
			if (auxRow && auxRow != e.row) {
				auxRow.hasCheck = false;
				auxRow.backgroundColor = "white";
			}
		} else {
			if (e.row.hasCheck) {
				e.row.hasCheck = false;
				e.row.backgroundColor = "white";
			} else {
				e.row.hasCheck = true;
				e.row.backgroundColor = '#ff6600';
			}
		}
		if (seletedExclude) {
			_self.xsetValue(_values[e.index + seletedExcludeCount]);
		} else {
			_self.xsetValue(_values[e.index]);
		}
		if (!_multiple) {
			auxRow = e.row;
			_self.fireEvent('done', {
				value : _value
			});
			_self.close();
		}

	});

	_self.add(v);
	v.add(_tvValues);

	_btnDone.addEventListener('click', function(e) {
		_self.fireEvent('done', {
			value : _value
		});
		_self.close();
	});

	_btnCancel.addEventListener('click', function(e) {
		_self.close();
	});

	_self.xsetValue = function(value) {
		if (_selidx > -1) {
			_tvValues.deselectRow(_selidx);
		}

		for (var i = 0; i < _values.length; i++) {
			if (_values[i].title == value) {
				_selidx = i;
				_tvValues.selectRow(_selidx);
				_tvValues.scrollToIndex(_selidx);
				break;
			}
		}

		_value = value;
	};

	return _self;
}

function Combobox(params) {
	var _self = null;
	var _label = null;
	var _values = [];
	var _value = "";
	var _multiple = false;
	var _data = [];
	var _title = '';
	var _ppopup = null;
	var _labelSelect = L('select');

	var _btn_disclosure = null;
	var _labelSelectActive = 'true';

	var newparams = {};

	if (params.labelSelect) {
		_labelSelect = params.labelSelect;
	} else if ( typeof params.labelSelect === "boolean") {
		if (!params.labelSelect) {
			_labelSelectActive = params.labelSelect;
		}
	}
	var labelSelected = {
		"title" : _labelSelect,
		"value" : "exclude"
	};

	for (var k in params) {
		if (k == 'values') {
			if (_labelSelectActive) {
				params[k].unshift(labelSelected);
			}
			_values = params[k];
			continue;
		}
		if (k == 'title') {
			_title = params[k];
			continue;
		}
		newparams[k] = params[k];
	}

	if (params.multiple) {
		_multiple = params.multiple;
	}
	if (_values.length > 0) {
		if ( typeof params.selectedValueIndex === "number") {
			_value = _values[params.selectedValueIndex];
		} else if (_labelSelectActive) {
			_value = _values[0];
		}
	}
	var countActiveValues = 0;
	for (var i = 0; i < _values.length; i++) {
		_data.push(Ti.UI.createPickerRow({
			title : _values[i].title,
			data : _values[i]
		}));
		if (_values[i].value != 'exclude') {
			countActiveValues++;
		}
	}

	if (Ti.Platform.osname === 'android') {
		if ( typeof newparams.backgroundColor != "undefined") {
			// don't set a background color on android; that will remove the "control look" of
			// the picker...
			delete newparams.backgroundColor;
		}
		//Ti.API.debug('[Combobox] newparams: ' + JSON.stringify(newparams));

		_self = Ti.UI.createPicker(newparams);
		_self.addEventListener('change', function(e) {
			_value = e.selectedValue[0];
			_self.fireEvent('TwChange', {
				//value : _value
				value: _self.getSelectedRow(0).data.value
			});
		});
		_self.add(_data);
	} else {
		if ( typeof newparams.height === 'undefined') {
			newparams.height = 35;
		}
		if ( typeof newparams.borderColor === 'undefined') {
			newparams.borderColor = '#999';
		}
		if ( typeof newparams.borderRadius === 'undefined') {
			newparams.borderRadius = 5;
		}
		if ( typeof newparams.backgroundColor === 'undefined') {
			newparams.backgroundColor = '#fff';
		}
		if ( typeof newparams.font === 'undefined') {
			newparams.font = {
				//fontSize : 16,
				fontSize : 30,
				fontWeight : 'bold'
			};
		}
		if ( typeof newparams.color === 'undefined') {
			newparams.color = '#385487';
		}

		//newparams.text = _value.title;

		_self = Ti.UI.createView(newparams);

		var labelparams = {
			left : '10dp',
			top : '11dp',
			color : newparams.color,
			font : newparams.font,
			text : _value.title,
			data : _value
		};

		_label = Ti.UI.createLabel(labelparams);

		var tr = Ti.UI.create2DMatrix();
		//tr = tr.rotate();
		_btn_disclosure = Ti.UI.createButton({
			right : 5,
			style : Ti.UI.iPhone.SystemButton.DISCLOSURE,
			transform : tr,
			backgroundImage : '/widget/arrow.png',
		});
		if (countActiveValues == 0) {
			_label.text = 'Sin Informacion';
		}
		_self.add(_label);
		_self.add(_btn_disclosure);
			
		_self.addEventListener('click', function(e) {
			if (countActiveValues > 0) {
				_ppopup = new PickerPopup(_title, _values, _multiple);
				_ppopup.addEventListener('done', function(e) {
					if (e.value == _value) {
						return;
					}

					_value = e.value;
					_label.text = _value.title;
					_label.data = _value;
					e.data = _label.data;

					_self.fireEvent('TwChange', e);
				});

				_ppopup.xsetValue(_value);

				// will open w/o a nav bar, but no fancy transition
				//_ppopup.open ();

				// open in modal so you can get a fancy transition, but this necessitates
				// hiding the navbar
				_ppopup.backgroundColor = 'rgba(51, 204, 255, 0.28)';
				_ppopup.open();
			}
		});
	}

	_self.xgetValue = function() {
		return _value;
	};

	_self.xsetValue = function(value) {
		for (var i = 0; i < _values.length; i++) {
			if (_values[i].title == value) {
				_value = value;
				if (Ti.Platform.osname === 'android' == 'android') {
					_self.setSelectedRow(0, i, false);
				} else {
					_label.text = _value;
					_label.data = _values[i];
				}
			}
		}
	};

	return _self;
}

Combobox.TUInit = function(tw) {
	Tw = tw;
};

module.exports = Combobox;
