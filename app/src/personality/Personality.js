// Load the custom app ES6 modules

import PersonalityPanel from './PersonalityPanel';
import PersonalityService from './PersonalityService'

export default angular
.module("personality", ['ngMaterial'])
.component(PersonalityPanel.name, PersonalityPanel.config)

.service("PersonalityService", PersonalityService);
