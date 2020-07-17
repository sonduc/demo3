<template>
	<div>
		  <div v-if="question_type == 'True/False/Not Given'">
		  	<h4>{{question.title}}</h4>
				<p class="text-description">{{question.description}}</p>
				<v-radio-group :value="question.answers[0].correct.toString()">
			    <v-radio label="True" value="true"></v-radio>
			    <v-radio label="False" value="false"></v-radio>
			    <v-radio label="Not Given" value="not given"></v-radio>
			  </v-radio-group>
		  </div>
		  <div v-if="question_type == 'Yes/No/Not Given'">
		  	<h4>{{question.title}}</h4>
				<p class="text-description">{{question.description}}</p>
				<v-radio-group :value="question.answers[0].correct.toString()">
			    <v-radio label="True" value="true"></v-radio>
			    <v-radio label="False" value="false"></v-radio>
			    <v-radio label="Not Given" value="not given"></v-radio>
			  </v-radio-group>
		  </div>
		  <div v-if="question_type == 'Single Choice' || 'Single Select'">
		  	<h4>{{question.title}}</h4>
				<p class="text-description">{{question.description}}</p>
				<v-radio-group :value="question.answers[0].correct.toString()">
			  	<template v-for="(option, i) in question.answers[0].option">
				    <v-radio :label="option" :value="option" :key="i"></v-radio>
				  </template>
			  </v-radio-group>
		  </div>
		  <div v-if="question_type == 'Multiple Choice'">
		  	<h4>{{question.title}}</h4>
				<p class="text-description">{{question.description}}</p>
				<template v-for="(option, i) in question.option">
      		<v-row align="center" :key="i">
          	<v-checkbox
          		v-model="option.checked"
          		:label="'Option' +i"
		        ></v-checkbox>
	        </v-row>
      	</template>
		  </div>
	</div>

</template>

<script>
export default {
  name: 'TypeQuestion',
	props:['question', 'question_type'],
  data () {
    return {

    }
  },
  created() {
  }
  
}
</script>

<style lang="css" scoped>

</style>