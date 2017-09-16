import PersonalityController from './PersonalityController';

export default {
  name: 'personalityPanel',
  config: {
    bindings: {},
    templateUrl: 'src/personality/PersonalityPanel.html',
    controller:['$log', 'PersonalityService', PersonalityController]
  }
};
