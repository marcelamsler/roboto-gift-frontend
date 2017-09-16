class PersonalityController {

  constructor($log, PersonalityService) {
    this.$log = $log;
    this.PersonalityService = PersonalityService;
    PersonalityService.getPersonality(null, null, null).then((personality) => {
      this.personality = personality;
    });
  }

}

export default PersonalityController