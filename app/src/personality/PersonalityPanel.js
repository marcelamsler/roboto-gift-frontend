import PersonalityController from './PersonalityController';

export default {
  name: 'personalityPanel',
  config: {
    bindings: {personality: '<', userInfo: '<'},
    templateUrl: 'src/personality/PersonalityPanel.html',
    controller:['$log', 'PersonalityService', PersonalityController]
  }
};
