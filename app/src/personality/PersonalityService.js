function PersonalityService($http, $q) {

  let serverUrl = 'https://roboto-gift.herokuapp.com/personality/';

  let exampleResponse = {
    "image_url": "https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/16730396_108569443000605_5837713967493160066_n.jpg?oh=1abab85e76e8d71ff27c2482134531d6&oe=5A43B673",
    "name": "Gaylord Fucker",
    "word_count": 15223,
    "processed_language": "en",
    "personality": [{
      "trait_id": "big5_openness",
      "name": "Openness",
      "category": "personality",
      "percentile": 0.8011555009553,
      "raw_score": 0.77565404255038,
      "children": [{
        "trait_id": "facet_adventurousness",
        "name": "Adventurousness",
        "category": "personality",
        "percentile": 0.89755869047319,
        "raw_score": 0.54990704031219
      }]
    }, {
      "trait_id": "big5_conscientiousness",
      "name": "Conscientiousness",
      "category": "personality",
      "percentile": 0.81001753184176,
      "raw_score": 0.66899984888815,
      "children": [{
        "trait_id": "facet_achievement_striving",
        "name": "Achievement striving",
        "category": "personality",
        "percentile": 0.84613299226628,
        "raw_score": 0.74240118454888
      }]
    }, {
      "trait_id": "big5_extraversion",
      "name": "Extraversion",
      "category": "personality",
      "percentile": 0.64980796071382,
      "raw_score": 0.56817738781166,
      "children": [{
        "trait_id": "facet_activity_level",
        "name": "Activity level",
        "category": "personality",
        "percentile": 0.88220584913965,
        "raw_score": 0.60106995926143
      }]
    }, {
      "trait_id": "big5_agreeableness",
      "name": "Agreeableness",
      "category": "personality",
      "percentile": 0.94786124793821,
      "raw_score": 0.80677815631809,
      "children": [{
        "trait_id": "facet_altruism",
        "name": "Altruism",
        "category": "personality",
        "percentile": 0.99241983824205,
        "raw_score": 0.79028406290747
      }]
    }, {
      "trait_id": "big5_neuroticism",
      "name": "Emotional range",
      "category": "personality",
      "percentile": 0.5008224041628,
      "raw_score": 0.46748200007024,
      "children": [{
        "trait_id": "facet_anger",
        "name": "Fiery",
        "category": "personality",
        "percentile": 0.17640022058508,
        "raw_score": 0.48490315691802
      }]
    }],
    "needs": [{
      "trait_id": "need_challenge",
      "name": "Challenge",
      "category": "needs",
      "percentile": 0.67362332054511,
      "raw_score": 0.75196348037675
    }, {
      "trait_id": "need_closeness",
      "name": "Closeness",
      "category": "needs",
      "percentile": 0.83802834041813,
      "raw_score": 0.83714327329724
    }],
    "values": [{
      "trait_id": "value_conservation",
      "name": "Conservation",
      "category": "values",
      "percentile": 0.89268222856139,
      "raw_score": 0.72135308187423
    }, {
      "trait_id": "value_openness_to_change",
      "name": "Openness to change",
      "category": "values",
      "percentile": 0.85759916388086,
      "raw_score": 0.82551308431323
    }],
    "behavior": [{
      "trait_id": "behavior_sunday",
      "name": "Sunday",
      "category": "behavior",
      "percentage": 0.21392532795156
    }, {
      "trait_id": "behavior_monday",
      "name": "Monday",
      "category": "behavior",
      "percentage": 0.42583249243189
    }, {
      "trait_id": "behavior_0000",
      "name": "0:00 am",
      "category": "behavior",
      "percentage": 0.4561049445005
    }, {
      "trait_id": "behavior_0100",
      "name": "1:00 am",
      "category": "behavior",
      "percentage": 0.12209889001009
    }],
    "consumption_preferences": [{
      "consumption_preference_category_id": "consumption_preferences_shopping",
      "name": "Purchasing Preferences",
      "consumption_preferences": [{
        "consumption_preference_id": "consumption_preferences_automobile_ownership_cost",
        "name": "Prefers automobile ownership cost",
        "score": 0
      }]
    }, {
      "consumption_preference_category_id": "consumption_preferences_health_and_activity",
      "name": "Health & Activity Preferences",
      "consumption_preferences": [{
        "consumption_preference_id": "consumption_preferences_eat_out",
        "name": "Prefers to eat out",
        "score": 1
      }]
    }, {
      "consumption_preference_category_id": "consumption_preferences_environmental_concern",
      "name": "Environmental Concern Preferences",
      "consumption_preferences": [{
        "consumption_preference_id": "consumption_preferences_concerned_environment",
        "name": "Likely to be concerned about the environment",
        "score": 0
      }]
    }, {
      "consumption_preference_category_id": "consumption_preferences_entrepreneurship",
      "name": "Entreprenuership Preferences",
      "consumption_preferences": [{
        "consumption_preference_id": "consumption_preferences_start_business",
        "name": "Likely to start a business in next few years",
        "score": 1
      }]
    }, {
      "consumption_preference_category_id": "consumption_preferences_movie",
      "name": "Movie Preferences",
      "consumption_preferences": [{
        "consumption_preference_id": "consumption_preferences_movie_romance",
        "name": "Likely to is an Inter-Gender Gay",
        "score": 1
      }]
    }, {
      "consumption_preference_category_id": "consumption_preferences_music",
      "name": "Music Preferences",
      "consumption_preferences": [{
        "consumption_preference_id": "consumption_preferences_music_rap",
        "name": "Likely to suck dicks",
        "score": 1
      }]
    }, {
      "consumption_preference_category_id": "consumption_preferences_reading",
      "name": "Reading Preferences",
      "consumption_preferences": [{
        "consumption_preference_id": "consumption_preferences_read_frequency",
        "name": "Reading frequency",
        "score": 0
      }]
    }, {
      "consumption_preference_category_id": "consumption_preferences_volunteering",
      "name": "Volunteering Preferences",
      "consumption_preferences": [{
        "consumption_preference_id": "consumption_preferences_volunteer",
        "name": "Have volunteering experience",
        "score": 0
      }]
    }],
    "warnings": []
  };

  return {
    getPersonality: function (userName, userPassword, targetUser) {
      let searchParams = {
        userName: userName,
        password: userPassword,
        targetUser: targetUser,
      };

      let relevantConsumptionPreferencesCategoryIds = ['consumption_preferences_shopping',
        'consumption_preferences_health_and_activity',
        'consumption_preferences_reading',
        'consumption_preferences_music',
        'consumption_preferences_movie'];

      let excludedPreferenceIds = ['consumption_preferences_automobile_ownership_cost'];

      let relevantConsumptionPreferences = exampleResponse.consumption_preferences.filter((consumptionPreferenceCategory) => {
        return relevantConsumptionPreferencesCategoryIds.includes(consumptionPreferenceCategory.consumption_preference_category_id)
      });

      let likes = [];
      let dislikes = [];
      relevantConsumptionPreferences.forEach((consumptionPreferenceCategory) => {
        consumptionPreferenceCategory.consumption_preferences.forEach((preference) => {
          if (!excludedPreferenceIds.includes(preference.consumption_preference_id)) {
            if (preference.score > 0) {
              likes.push(preference);
            } else {
              dislikes.push(preference);
            }
          }
        })
      });

      exampleResponse.dislikes = dislikes;
      exampleResponse.likes = likes;
      //return $http.get(serverUrl, {params: searchParams}).then((response) => response.data);
      return $q.when(exampleResponse);
    },

  };
}