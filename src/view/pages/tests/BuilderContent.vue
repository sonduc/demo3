<template>
	<v-app>
		<div class="card card-custom">
	    <div class="card-body p-0">
	      <!--begin: Wizard-->
	      <div
	        class="wizard wizard-1"
	        id="kt_wizard_v1"
	        data-wizard-state="step-first"
	        data-wizard-clickable="true"
	      >
	        <!--begin: Wizard Nav-->
	        <div class="wizard-nav border-bottom">
	          <div class="wizard-steps p-8 p-lg-10">
	            <div
	              class="wizard-step"
	              data-wizard-type="step"
	              data-wizard-state="current"
	            >
	              <div class="wizard-label">
	                <i class="wizard-icon flaticon-list"></i>
	                <h3 class="wizard-title">1. Test & Exercise Builder</h3>
	              </div>
	              <i class="wizard-arrow flaticon2-next"></i>
	            </div>
	            <div class="wizard-step" data-wizard-type="step">
	              <div class="wizard-label">
	                <i class="wizard-icon flaticon-list"></i>
	                <h3 class="wizard-title">2. Skill & Build Content</h3>
	              </div>
	              <i class="wizard-arrow flaticon2-next"></i>
	            </div>

	          </div>
	        </div>
	        <!--end: Wizard Nav-->

	        <!--begin: Wizard Body-->
	        <div class="row justify-content-center my-10 px-8 my-lg-15 px-lg-10">
	          <div class="col-xl-12 col-xxl-7">
	            <!--begin: Wizard Form-->
	            <form class="form" id="kt_form">
	              <!--begin: Wizard Step 1-->
	              <div
	                class="pb-5"
	                data-wizard-type="step-content"
	                data-wizard-state="current"
	               >
	                <h3 class="mb-10 font-weight-bold text-dark">
	                  Test & Exercise Builder
	                </h3>
									<v-col cols="8">
										<div>
				              <b-form-group
				                label-cols="4"
				                label-cols-lg="2"
				                label-size="sm"
				                label="Title"
				                label-for="input-sm"
				              >
				                <b-form-input id="input-sm" size="sm" placeholder="Enter text"></b-form-input>
				              </b-form-group>
											
											<b-form-group
				                label-cols="4"
				                label-cols-lg="2"
				                label-size="lg"
				                label="Limit Time"
				              >
				                <b-form-checkbox size="lg"></b-form-checkbox>
				              </b-form-group>

				              <b-form-group
				                label-cols="4"
				                label-cols-lg="2"
				                label-size="lg"
				                label="Description"
				                label-for="textarea"
				              >
				                <b-form-textarea
			                    id="textarea"
			                    placeholder="Enter text"
			                    rows="8"
			                  ></b-form-textarea>
				              </b-form-group>

											<b-form-group
				                label-cols="4"
				                label-cols-lg="2"
				                label-size="lg"
				                label="Grading Scale"
				              >
				              	<v-autocomplete
						              v-model="friends"
						              :disabled="isUpdating"
						              :items="people"
						              filled
						              chips
						              color="blue-grey"
						              item-text="name"
						              item-value="name"
						              multiple
						             >
						              <template v-slot:selection="data">
						                <v-chip
						                  v-bind="data.attrs"
						                  :input-value="data.selected"
						                  close
						                  @click="data.select"
						                  @click:close="remove(data.item)"
						                >
						                  {{ data.item.name }}
						                </v-chip>
						              </template>
						              <template v-slot:item="data">
						                <template v-if="typeof data.item !== 'object'">
						                  <v-list-item-content v-text="data.item"></v-list-item-content>
						                </template>
						                <template v-else>
						                  <v-list-item-content>
						                    <v-list-item-title v-html="data.item.name"></v-list-item-title>
						                  </v-list-item-content>
						                </template>
						              </template>
						            </v-autocomplete>
						            
						          </b-form-group>

						          <b-form-group
				                label-cols="4"
				                label-cols-lg="2"
				                label-size="lg"
				                label="Rarity"
				                >
						            <v-autocomplete
						              v-model="friends"
						              :disabled="isUpdating"
						              :items="people"
						              filled
						              chips
						              color="blue-grey lighten-2"
						              label=""
						              item-text="name"
						              item-value="name"
						              multiple
						            >
						              <template v-slot:selection="data">
						                <v-chip
						                  v-bind="data.attrs"
						                  :input-value="data.selected"
						                  close
						                  @click="data.select"
						                  @click:close="remove(data.item)"
						                >
						                  {{ data.item.name }}
						                </v-chip>
						              </template>
						              <template v-slot:item="data">
						                <template v-if="typeof data.item !== 'object'">
						                  <v-list-item-content v-text="data.item"></v-list-item-content>
						                </template>
						                <template v-else>
						                  <v-list-item-content>
						                    <v-list-item-title v-html="data.item.name"></v-list-item-title>
						                  </v-list-item-content>
						                </template>
						              </template>
						            </v-autocomplete>
						          </b-form-group>

						          <b-form-group
				                label-cols="4"
				                label-cols-lg="2"
				                label-size="lg"
				                label="Level(s)"
				                >
						            <v-autocomplete
						              v-model="friends"
						              :disabled="isUpdating"
						              :items="people"
						              filled
						              chips
						              color="blue-grey lighten-2"
						              label=""
						              item-text="name"
						              item-value="name"
						              multiple
						            >
						              <template v-slot:selection="data">
						                <v-chip
						                  v-bind="data.attrs"
						                  :input-value="data.selected"
						                  close
						                  @click="data.select"
						                  @click:close="remove(data.item)"
						                >
						                  {{ data.item.name }}
						                </v-chip>
						              </template>
						              <template v-slot:item="data">
						                <template v-if="typeof data.item !== 'object'">
						                  <v-list-item-content v-text="data.item"></v-list-item-content>
						                </template>
						                <template v-else>
						                  <v-list-item-content>
						                    <v-list-item-title v-html="data.item.name"></v-list-item-title>
						                  </v-list-item-content>
						                </template>
						              </template>
						            </v-autocomplete>
						          </b-form-group>

						          <b-form-group
				                label-cols="4"
				                label-cols-lg="2"
				                label-size="lg"
				                label="Skill(s)"
				                >
						            <v-autocomplete
						              v-model="friends"
						              :disabled="isUpdating"
						              :items="people"
						              filled
						              chips
						              color="blue-grey lighten-2"
						              label=""
						              item-text="name"
						              item-value="name"
						              multiple
						            >
						              <template v-slot:selection="data">
						                <v-chip
						                  v-bind="data.attrs"
						                  :input-value="data.selected"
						                  close
						                  @click="data.select"
						                  @click:close="remove(data.item)"
						                >
						                  {{ data.item.name }}
						                </v-chip>
						              </template>
						              <template v-slot:item="data">
						                <template v-if="typeof data.item !== 'object'">
						                  <v-list-item-content v-text="data.item"></v-list-item-content>
						                </template>
						                <template v-else>
						                  <v-list-item-content>
						                    <v-list-item-title v-html="data.item.name"></v-list-item-title>
						                  </v-list-item-content>
						                </template>
						              </template>
						            </v-autocomplete>
						          </b-form-group>

						          <b-form-group
				                label-cols="4"
				                label-cols-lg="2"
				                label-size="lg"
				                label="Vocabulary Tag(s)"
				                >
						            <v-autocomplete
						              v-model="friends"
						              :disabled="isUpdating"
						              :items="people"
						              filled
						              chips
						              color="blue-grey lighten-2"
						              label=""
						              item-text="name"
						              item-value="name"
						              multiple
						            >
						              <template v-slot:selection="data">
						                <v-chip
						                  v-bind="data.attrs"
						                  :input-value="data.selected"
						                  close
						                  @click="data.select"
						                  @click:close="remove(data.item)"
						                >
						                  {{ data.item.name }}
						                </v-chip>
						              </template>
						              <template v-slot:item="data">
						                <template v-if="typeof data.item !== 'object'">
						                  <v-list-item-content v-text="data.item"></v-list-item-content>
						                </template>
						                <template v-else>
						                  <v-list-item-content>
						                    <v-list-item-title v-html="data.item.name"></v-list-item-title>
						                  </v-list-item-content>
						                </template>
						              </template>
						            </v-autocomplete>
						          </b-form-group>

						          <b-form-group
				                label-cols="4"
				                label-cols-lg="2"
				                label-size="lg"
				                label="Grammar Tag(s)"
				                >
						            <v-autocomplete
						              v-model="friends"
						              :disabled="isUpdating"
						              :items="people"
						              filled
						              chips
						              color="blue-grey lighten-2"
						              label=""
						              item-text="name"
						              item-value="name"
						              multiple
						            >
						              <template v-slot:selection="data">
						                <v-chip
						                  v-bind="data.attrs"
						                  :input-value="data.selected"
						                  close
						                  @click="data.select"
						                  @click:close="remove(data.item)"
						                >
						                  {{ data.item.name }}
						                </v-chip>
						              </template>
						              <template v-slot:item="data">
						                <template v-if="typeof data.item !== 'object'">
						                  <v-list-item-content v-text="data.item"></v-list-item-content>
						                </template>
						                <template v-else>
						                  <v-list-item-content>
						                    <v-list-item-title v-html="data.item.name"></v-list-item-title>
						                  </v-list-item-content>
						                </template>
						              </template>
						            </v-autocomplete>
						          </b-form-group>

						          <b-form-group
				                label-cols="4"
				                label-cols-lg="2"
				                label-size="lg"
				                label="Other Tag(s)"
				                >
						            <v-autocomplete
						              v-model="friends"
						              :disabled="isUpdating"
						              :items="people"
						              filled
						              chips
						              color="blue-grey lighten-2"
						              label=""
						              item-text="name"
						              item-value="name"
						              multiple
						            >
						              <template v-slot:selection="data">
						                <v-chip
						                  v-bind="data.attrs"
						                  :input-value="data.selected"
						                  close
						                  @click="data.select"
						                  @click:close="remove(data.item)"
						                >
						                  {{ data.item.name }}
						                </v-chip>
						              </template>
						              <template v-slot:item="data">
						                <template v-if="typeof data.item !== 'object'">
						                  <v-list-item-content v-text="data.item"></v-list-item-content>
						                </template>
						                <template v-else>
						                  <v-list-item-content>
						                    <v-list-item-title v-html="data.item.name"></v-list-item-title>
						                  </v-list-item-content>
						                </template>
						              </template>
						            </v-autocomplete>
						          </b-form-group>
				            </div>
									</v-col>

	              </div>
	              <!--end: Wizard Step 1-->

	              <!--begin: Wizard Step 2-->
	              <div class="pb-5" data-wizard-type="step-content">
	                <h4 class="mb-10 font-weight-bold text-dark">
	                  Skill & Build Content
	                </h4>
	                <v-card>
								    <v-tabs
								      v-model="tab"
								    >
								      <v-tab
								        v-for="item in items"
								        :key="item.tab"
								        class="tab-skill"
								      >
								        {{ item.tab }}
								      </v-tab>

								    </v-tabs>

								    <v-tabs-items v-model="tab">
								      <v-tab-item
								        v-for="item in items"
								        :key="item.tab"
								      >
								        <v-card flat>
								          <v-card-text>
								          	<v-tabs vertical>
												      <v-tab v-for="(section, index) in sections" :key="index">
												        <v-icon left>mdi-format-align-justify</v-icon>
												        {{ section.tab }}
												      </v-tab>
															<v-tab @click.prevent="openDialogSection"><v-icon dark>mdi-plus</v-icon></v-tab>

												      <v-tab-item  v-for="(section, index) in sections" :key="index">
												        <v-card flat class="ml-4">
																	<h5 class="mt-4">section description</h5>
												          <div class="mt-4">
															      <v-btn class="ma-2 btn-add-file" depressed outlined large>
																      <v-icon left>mdi-file-image</v-icon> Add Media
																    </v-btn>
																    <v-btn class="ma-2 ml-2 btn-add-file" depressed outlined large>
																      <v-icon left>mdi-file-image</v-icon> Add Post
																    </v-btn>
															  	</div>
															  	<div class="mt-4">
															  		<v-btn class="ma-2 btn-add-exer" x-small large>
																      <v-icon dark>mdi-plus</v-icon>Add Exercise
																    </v-btn>
																    <div class="ml-10 mt-4">
																    	<h6>exercise title</h6>
																			<p>exercise description</p>
																			<v-btn class="ma-2 btn-add-exer" x-small large>
																	      <v-icon dark>mdi-plus</v-icon>Add Question
																	    </v-btn>
																	    <div class="ml-10 mt-4">
																	    	<h6>question title</h6>
																	    	<p>question description</p>
																	    	<p>type question</p>
																	    </div>
																    </div>
															  	</div>
																	
												        </v-card>
												      </v-tab-item>
												      
												    </v-tabs>
								          </v-card-text>
								        </v-card>
								      </v-tab-item>
								    </v-tabs-items>
								  </v-card>
	              </div>
	              <!--end: Wizard Step 2-->

	              <!--begin: Wizard Actions -->
	              <div class="d-flex justify-content-between border-top pt-10">
	                <div class="mr-2">
	                  <button
	                    class="btn btn-light-primary font-weight-bold text-uppercase px-9 py-4"
	                    data-wizard-type="action-prev"
	                  >
	                    Previous
	                  </button>
	                </div>
	                <div>
	                  <button
	                    v-on:click="submit"
	                    class="btn btn-success font-weight-bold text-uppercase px-9 py-4"
	                    data-wizard-type="action-submit"
	                  >
	                    Submit
	                  </button>
	                  <button
	                    class="btn btn-primary font-weight-bold text-uppercase px-9 py-4"
	                    data-wizard-type="action-next"
	                  >
	                    Next Step
	                  </button>
	                </div>
	              </div>
	              <!--end: Wizard Actions -->
	            </form>
	            <!--end: Wizard Form-->
	          </div>
	        </div>
	        <!--end: Wizard Body-->
	      </div>
	    </div>
	    <!--end: Wizard-->
	    <v-row justify="center">
			  <v-dialog v-model="dialogSection" persistent max-width="600px">
			    <v-card>
			      <v-card-title>
			        <span class="headline">Add Section</span>
			      </v-card-title>
			      <v-card-text>
			        <v-container>
			          <v-row>
			            <v-col cols="12">
			              <v-text-field label="Email*" required></v-text-field>
			            </v-col>
			            <v-col cols="12">
			              <v-text-field label="Password*" type="password" required></v-text-field>
			            </v-col>
			          </v-row>
			        </v-container>
			        <small>*indicates required field</small>
			      </v-card-text>
			      <v-card-actions>
			        <v-spacer></v-spacer>
			        <v-btn color="blue darken-1" text @click="dialogSection = false">Close</v-btn>
			        <v-btn color="blue darken-1" text @click="dialogSection = false">Save</v-btn>
			      </v-card-actions>
			    </v-card>
			  </v-dialog>
			</v-row>
	  </div>
	</v-app>
</template>

<style lang="scss">
@import "@/assets/sass/pages/wizard/wizard-1.scss";
</style>

<script>

import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import KTUtil from "@/assets/js/components/util";
import KTWizard from "@/assets/js/components/wizard";
import Swal from "sweetalert2";

export default {

  name: 'BuilderContent',

  data () {

    return {
    	dialogSection:false,
    	closeSkills:false,
    	addSkills:true,
			autoUpdate: true,
			dataSkill: '',
	    friends: [],
	    isUpdating: false,
	    name: 'Midnight Crew',
	    people: [
	      { name: 'Sandra Adams'},
	      { name: 'Ali Connors'},
	      { name: 'Trevor Hansen'},
	      { name: 'Tucker Smith'},
	    ],
	    title: 'The summer breeze',
	    tab: null,
      items: [
        { tab: 'Speaking' },
        { tab: 'Reading' },
        { tab: 'Writing' },
        { tab: 'Listening' },
        { tab: 'Vocabulary' },
        { tab: 'Grammar' },
      ],

      sections: [
      	{ tab: 'Section1' },
      ],
      typeExercise: ['Short answer', 'Paragraph'],

      skills:[
      	{ 
      		name: 'Speaking',
      	  selected: true, 
      	  sections:[
      	  	{
      	  		title:'',
      	  		description: '',
      	  		file: '',
      	  		exercises: [
	      	  		{
	      	  			title: '',
	      	  			description: '',
	      	  			questions: [
	      	  				{
	      	  					title: '',
	      	  					description: '',
	      	  					type: '',
	      	  				}
	      	  			],
	      	  		}
      	  		
      	  		],
      	  	},
      	  ] 
      	},
      	{ 
      		name: 'Reading',
      	  selected: false, 
      	  sections:[
      	  	{
      	  		title:'',
      	  		description: '',
      	  		file: '',
      	  		exercises: [
	      	  		{
	      	  			title: '',
	      	  			description: '',
	      	  			questions: [
	      	  				{
	      	  					title: '',
	      	  					description: '',
	      	  					type: '',
	      	  				}
	      	  			],
	      	  		}
      	  		
      	  		],
      	  	},
      	  ] 
      	},
      	{ 
      		name: 'Writing',
      	  selected: false, 
      	  sections:[
      	  	{
      	  		title:'',
      	  		description: '',
      	  		file: '',
      	  		exercises: [
	      	  		{
	      	  			title: '',
	      	  			description: '',
	      	  			questions: [
	      	  				{
	      	  					title: '',
	      	  					description: '',
	      	  					type: '',
	      	  				}
	      	  			],
	      	  		}
      	  		
      	  		],
      	  	},
      	  ] 
      	},
      ],
    }
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Wizard" },
      { title: "Wizard-1" }
    ]);

    // Initialize form wizard
    const wizard = new KTWizard("kt_wizard_v1", {
      startStep: 1, // initial active step number
      clickableSteps: true // allow step clicking
    });

    // Validation before going to next page
    wizard.on("beforeNext", function(/*wizardObj*/) {
      // validate the form and use below function to stop the wizard's step
      // wizardObj.stop();
    });

    // Change event
    wizard.on("change", function(/*wizardObj*/) {
      setTimeout(() => {
        KTUtil.scrollTop();
      }, 500);
    });
  },

  watch: {
    isUpdating (val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000)
      }
    },
  },

  methods: {
    submit: function(e) {
      e.preventDefault();
      Swal.fire({
        title: "",
        text: "The application has been successfully submitted!",
        icon: "success",
        confirmButtonClass: "btn btn-secondary"
      });
    },

    remove (item) {
      const index = this.friends.indexOf(item.name)
      if (index >= 0) this.friends.splice(index, 1)
    },
  	openDialogSection() {
  		this.dialogSection = true;
  	}
  }
}
</script>

<style lang="css" scoped>
.tab-skill{
	background-color: #1BC5BD !important;
}
.icon-skill {
	padding-right: 10px;
}
.default-padding{
	padding: 0;
	border: none
}
.input-skill{
	border: 1px solid white;
	padding: 0px;
  background-color: white;
  margin-top: 12px;
  line-height: 2;
}
.btn-add-file{
	background-color: #05cdff !important;
  color: white !important;
}
.btn-add-exer{
	background-color: #e5e5e5 !important;
}
</style>