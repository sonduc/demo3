<template>
	<div class="ml-4">
		  <div v-if="exercise_type == 'True/False/Not Given'">
				<v-radio-group :value="question.answers[0].correct.toString()">
			    <v-radio label="True" value="true"></v-radio>
			    <v-radio label="False" value="false"></v-radio>
			    <v-radio label="Not Given" value="not given"></v-radio>
			  </v-radio-group>
		  </div>
		  <div v-if="exercise_type == 'Yes/No/Not Given'">
				<v-radio-group :value="question.answers[0].correct.toString()">
			    <v-radio label="Yes" value="yes"></v-radio>
			    <v-radio label="No" value="no"></v-radio>
			    <v-radio label="Not Given" value="not given"></v-radio>
			  </v-radio-group>
		  </div>
		  <div v-if="exercise_type == 'Single Choice'">
				<v-radio-group :value="question.answers[0].correct.toString()">
			  	<template v-for="(option, i) in question.answers[0].option">
				    <v-radio :label="option" :value="option" :key="i"></v-radio>
				  </template>
			  </v-radio-group>
		  </div>
		  <div v-if="exercise_type == 'Single Select'">
				<v-radio-group :value="question.answers[0].correct.toString()">
			  	<template v-for="(option, i) in question.answers[0].option">
				    <v-radio :label="option" :value="option" :key="i"></v-radio>
				  </template>
			  </v-radio-group>
		  </div>
		  <div v-if="exercise_type == 'Multiple Choice'">
				<template v-for="(option, i) in question.answers[0].option">
      		<v-row align="center" :key="i">
          	<v-checkbox
          		v-model="option.checked"
          		:label="option.value"
		        ></v-checkbox>
	        </v-row>
      	</template>
		  </div>
	</div>

</template>

<script>
export default {
  name: 'TypeQuestion',
	props:['question', 'exercise_type'],
  data () {
    return {

    }
  },
  created() {
  	//console.log(this.question);
  }
  
}
</script>

<style lang="css" scoped>

</style>