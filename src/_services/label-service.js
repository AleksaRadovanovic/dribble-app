
import {EngLabels} from './_constants/eng-labels.js';
import {MneLabels} from './_constants/mne-labels.js';

 function getLabel(lang, label_id) {
    try 
    {
        if (lang == 'MNE')
            return MneLabels[label_id];

        if (lang == 'ENG')
            return EngLabels[label_id];

        return '';
    }
    catch (err) {    
        return '';
    }
}

export default {
	getLabel
}