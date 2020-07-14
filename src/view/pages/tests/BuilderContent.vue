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
	          <div class="col-xl-12 col-xxl-12">
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
	                <v-btn color="#05cdff" class="mb-2" @click="openDialogSkill">
	                	<v-icon color="white">mdi-plus</v-icon><p style="color:white" class="ml-2 mt-4">Add Skill</p>
	                </v-btn>
	                <v-card>
								    <v-tabs
								      v-model="tab"
											class="tab-skill"
											background-color="#C9F7F5"
								    >
								      <v-tab
								        v-for="(skill, index) in skills"
								        :key="index"
								      >
								        {{ skill.name }}
								      </v-tab>

								    </v-tabs>
	
								    <v-tabs-items v-model="tab">
								      <v-tab-item
								        v-for="(skill, index) in skills"
								        :key="index"
								      >
								        <v-card flat>
								          <v-card-text>
								          	<v-tabs vertical>
								          		<template v-for="(section, i) in skill.sections">
													      <v-tab v-if="skill.sections.length" :key="i" class="tab-section">
													        <v-icon left>mdi-format-align-justify</v-icon>
													        {{ section.title }}
													      </v-tab>
												    	</template>
								     					<v-icon @click="openDialogSection(index)">mdi-plus</v-icon>
											
															<template v-for="(section, i) in skill.sections">
																<v-tab-item v-if="skill.sections.length" :key="i">
													        <v-card flat class="ml-4">
																		<h5 class="mt-4">{{ section.description }}</h5>
													          <div class="mt-4">
																      <v-btn class="ma-2 btn-add-file" depressed outlined large>
																	      <v-icon left>mdi-file-image</v-icon> Add Media
																	    </v-btn>
																	    <v-btn class="ma-2 ml-2 btn-add-file" depressed outlined large>
																	      <v-icon left>mdi-file-image</v-icon> Add Post
																	    </v-btn>
																  	</div>
																  	<div class="mt-4">
																  		<v-btn @click="openDialogExercise()" class="ma-2 btn-add-exer" x-small large>
																	      <v-icon dark>mdi-plus</v-icon>Add Exercise
																	    </v-btn>
																	    <template v-for="(exercise, iExer) in section.exercises">
																		    <div v-if="section.exercises.length" class="ml-10 mt-4" :key="iExer">
																		    	<h6>{{exercise.title}}</h6>
																					<p>{{exercise.description}}</p>
																					<v-btn @click="openDialogQuestion()" class="ma-2 btn-add-exer" x-small large>
																			      <v-icon dark>mdi-plus</v-icon>Add Question
																			    </v-btn>
																			    <div class="ml-10 mt-4">
																			    	<h6>question title</h6>
																			    	<p>question description</p>
																			    </div>
																		    </div>
																	  	</template>
																  	</div>
																		
													        </v-card>
													      </v-tab-item>
															</template>

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
			  <v-dialog v-model="dialogSkill" persistent max-width="600px">
			    <v-card>
			      <v-card-title>
			        <span class="headline">Add Skill</span>
			      </v-card-title>
			      <v-card-text>
			        <v-container>
			          <v-row>
			            <v-col cols="12">
			              <v-col cols="12" sm="6">
			              <v-select
			                :items="optionSkill"
			                label="Choose your skill"
			                required
			                v-model="dataTitleSkill"
			              ></v-select>
			            </v-col>
			            </v-col>
			          </v-row>
			        </v-container>
			      </v-card-text>
			      <v-card-actions>
			        <v-spacer></v-spacer>
			        <v-btn color="blue darken-1" text @click="dialogSkill = false">Close</v-btn>
			        <v-btn color="blue darken-1" text @click="btnAddSkill">Add</v-btn>
			      </v-card-actions>
			    </v-card>
			  </v-dialog>
			</v-row>

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
			              <v-text-field label="Title" v-model="inputTitleSection" required></v-text-field>
			            </v-col>
			            <v-col cols="12">
			              <v-textarea
						          filled
						          label="Description"
						          v-model="inputDesSection"
						        ></v-textarea>
			            </v-col>
			          </v-row>
			        </v-container>
			      </v-card-text>
			      <v-card-actions>
			        <v-spacer></v-spacer>
			        <v-btn color="blue darken-1" text @click="dialogSection = false">Close</v-btn>
			        <v-btn color="blue darken-1" text @click="dialogSection">Add</v-btn>
			      </v-card-actions>
			    </v-card>
			  </v-dialog>
			</v-row>

			<v-row justify="center">
			  <v-dialog v-model="dialogExercise" persistent max-width="600px">
			    <v-card>
			      <v-card-title>
			        <span class="headline">Add Exercise</span>
			      </v-card-title>
			      <v-card-text>
			        <v-container>
			          <v-row>
			           	<v-col cols="12">
			              <v-text-field label="Title" v-model="inputTitleExercise" required></v-text-field>
			            </v-col>
			            <v-col cols="12">
			              <v-textarea
						          filled
						          label="Description"
						          v-model="inputDesExercise"
						        ></v-textarea>
			            </v-col>
			          </v-row>
			        </v-container>
			      </v-card-text>
			      <v-card-actions>
			        <v-spacer></v-spacer>
			        <v-btn color="blue darken-1" text @click="dialogExercise = false">Close</v-btn>
			        <v-btn color="blue darken-1" text @click="dialogExercise = false">Add</v-btn>
			      </v-card-actions>
			    </v-card>
			  </v-dialog>
			</v-row>

			<v-row justify="center">
			  <v-dialog v-model="dialogQuestion" persistent max-width="600px">
			    <v-card>
			      <v-card-title>
			        <span class="headline">Add Question</span>
			      </v-card-title>
			      <v-card-text>
			        <v-container>
			          <v-row>
			           	<v-col cols="12">
			              <v-text-field label="Title" v-model="inputTitleQuestion" required></v-text-field>
			            </v-col>
			            <v-col cols="12">
			              <v-textarea
						          filled
						          label="Description"
						          v-model="inputDesQuestion"
						        ></v-textarea>
			            </v-col>
			            <v-col cols="12" sm="6">
			              <v-select
			                :items="typeQuestionName"
			                label="Question type"
			                required
			                v-model="data_type_question"
			              ></v-select>
			            </v-col>
			            <template v-if="data_type_question == 'Short answer'">
			            	<v-col cols="3">
				            	<v-text-field
					              label="Max words"
					              required
					              type="number"
					            ></v-text-field>
				            </v-col>
				            <v-col cols="3">
				            	<v-text-field
					              label="Max numbers"
					              required
					              type="number"
					            ></v-text-field>
				            </v-col>
				            <v-col cols="12">
				            	<v-text-field
					              label="Correct answer"
					              required
					            ></v-text-field>
				            </v-col>
			            </template>
			            <template v-if="data_type_question == 'True/False/Not Given'">
			            	<v-col cols="12">
				            	<v-radio-group v-model="radioTrueFalse">
										    <v-radio label="True" value="true"></v-radio>
										    <v-radio label="False" value="false"></v-radio>
										    <v-radio label="Not Given" value="not given"></v-radio>
										  </v-radio-group>
									  </v-col>
			            </template>
			            <template v-if="data_type_question == 'Yes/No/Not Given'">
			            	<v-col cols="12">
				            	<v-radio-group v-model="radioYesNo">
										    <v-radio label="Yes" value="yes"></v-radio>
										    <v-radio label="No" value="no"></v-radio>
										    <v-radio label="Not Given" value="not given"></v-radio>
										  </v-radio-group>
									  </v-col>
			            </template>
			            <template v-if="data_type_question == 'Single Choice'">
			            	<v-col cols="3">
			            		<v-btn large @click="totalOptionSingleChoice++">
									      <v-icon>mdi-plus</v-icon>
									    </v-btn>
			            	</v-col>
			            	<v-col cols="12">
				            	<v-radio-group v-model="radioYesNo">
				            		<template v-for="i in totalOptionSingleChoice">
											    <v-radio :value="i" :key="i">
										        <template v-slot:label>
										          <v-text-field :label="'Option' + i"></v-text-field>
										          <v-btn class="mb-2"><v-icon @click="totalOptionSingleChoice--">mdi-delete</v-icon></v-btn>
										        </template>
										      </v-radio>
				            		</template>
										  </v-radio-group>
									  </v-col>
			            </template>
			            <template v-if="data_type_question == 'Single Select'">
			            	<v-col cols="3">
			            		<v-btn large @click="totalOptionSingleSelect++">
									      <v-icon>mdi-plus</v-icon>
									    </v-btn>
			            	</v-col>
			            	<v-col cols="12">
				            	<v-radio-group v-model="radioYesNo">
				            		<template v-for="i in totalOptionSingleSelect">
											    <v-radio :value="i" :key="i">
										        <template v-slot:label>
										          <v-text-field :label="'Option' + i"></v-text-field>
										          <v-btn class="mb-2" @click="totalOptionSingleSelect--"><v-icon>mdi-delete</v-icon></v-btn>
										        </template>
										      </v-radio>
				            		</template>
										  </v-radio-group>
									  </v-col>
			            </template>
			            <template v-if="data_type_question == 'Multiple Choice'">
			            	<v-col cols="3">
			            		<v-btn large @click="totalOptionMultipleChoice++">
									      <v-icon>mdi-plus</v-icon>
									    </v-btn>
			            	</v-col>
			            	<v-col cols="12">
			            		<template v-for="i in totalOptionMultipleChoice">
				            		<v-row align="center" :key="i">
						            	<v-checkbox
						            		hide-details
									        ></v-checkbox>
									        <v-text-field :label="'Option' +i"></v-text-field>
									        <v-btn class="mb-2" @click="totalOptionMultipleChoice--"><v-icon>mdi-delete</v-icon></v-btn>
								        </v-row>
							      	</template>
									  </v-col>
			            </template>
			            <template v-if="data_type_question == 'Paragraph'">
			            	<v-col cols="3">
				            	<v-text-field
					              label="Max words"
					              required
					              type="number"
					            ></v-text-field>
				            </v-col>
			            </template>
			            <template v-if="data_type_question == 'File Upload'"></template>
			          </v-row>
			        </v-container>
			      </v-card-text>
			      <v-card-actions>
			        <v-spacer></v-spacer>
			        <v-btn color="blue darken-1" text @click="dialogQuestion = false">Close</v-btn>
			        <v-btn color="blue darken-1" text @click="dialogQuestion = false">Add</v-btn>
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
    	data_type_question: null,
    	dialogSkill: false,
    	dialogSection:false,
    	dialogExercise: false,
    	dialogQuestion: false,
    	indexSectionCurrent: null,
    	dataTitleSkill: '',
    	inputTitleSection: '',
    	inputDesSection: '',
    	inputTitleExercise: '',
    	inputDesExercise: '',
    	inputTitleQuestion: '',
    	inputDesQuestion: '',
    	radioTrueFalse: null,
    	radioYesNo: null,
    	totalOptionSingleChoice: 2,
    	totalOptionSingleSelect: 2,
    	totalOptionMultipleChoice: 2,

			autoUpdate: true,
	    friends: [],
	    isUpdating: false,
	    name: 'Midnight Crew',
	    people: [
	      { name: 'Sandra Adams'},
	      { name: 'Ali Connors'},
	      { name: 'Trevor Hansen'},
	      { name: 'Tucker Smith'},
	    ],

	    optionSkill:['Speaking','Reading','Writing','Listing','Vocabulary','Grammar'],
	    optionSkillSelected:[],
	    tab: null,
      typeQuestionName: ['Short answer', 'True/False/Not Given', 'Yes/No/Not Given', 'Single Choice', 'Single Select', 'Multiple Choice', 'Paragraph', 'File Upload'],
      typeQUestionValue: [1, 21, 22, 2, 3, 4, 5, 6],
      skills:[
      	{ 
      		name: 'Speaking',
      	  selected: true, 
      	  sections:[
      	  	{
      	  		title:'Section1',
      	  		description: 'Description Section1',
      	  		file: '',
      	  		exercises: [
	      	  		{
	      	  			title: 'Exercises Title1',
	      	  			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil fuga aspernatur cumque esse rerum tenetur qui mollitia natus, ad animi itaque, eum vero accusamus voluptates modi consequuntur doloremque corporis omnis.',
	      	  			questions: [
	      	  				{
	      	  					title: '',
	      	  					description: '',
	      	  					question_type: '',
	      	  					answers:[ 
	      	  					  {
	      	  							type: '',
	      	  							content: '',
	      	  						}
	      	  					]
	      	  				}
	      	  			],
	      	  		}
      	  		
      	  		],
      	  	},
      	  	{
      	  		title:'Section2',
      	  		description: 'description Section2',
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
      	  	// {
      	  	// 	title:'',
      	  	// 	description: '',
      	  	// 	file: '',
      	  	// 	exercises: [
	      	  // 		{
	      	  // 			title: '',
	      	  // 			description: '',
	      	  // 			questions: [
	      	  // 				{
	      	  // 					title: '',
	      	  // 					description: '',
	      	  // 					type: '',
	      	  // 				}
	      	  // 			],
	      	  // 		}
      	  		
      	  	// 	],
      	  	// },
      	  ] 
      	},
      	{ 
      		name: 'Writing',
      	  selected: false, 
      	  sections:[
      	  	// {
      	  	// 	title:'',
      	  	// 	description: '',
      	  	// 	file: '',
      	  	// 	exercises: [
	      	  // 		{
	      	  // 			title: '',
	      	  // 			description: '',
	      	  // 			questions: [
	      	  // 				{
	      	  // 					title: '',
	      	  // 					description: '',
	      	  // 					type: '',
	      	  // 				}
	      	  // 			],
	      	  // 		}
      	  		
      	  	// 	],
      	  	// },
      	  ] 
      	},
      	{ 
      		name: 'Listening',
      	  selected: false, 
      	  sections:[
      	  	// {
      	  	// 	title:'',
      	  	// 	description: '',
      	  	// 	file: '',
      	  	// 	exercises: [
	      	  // 		{
	      	  // 			title: '',
	      	  // 			description: '',
	      	  // 			questions: [
	      	  // 				{
	      	  // 					title: '',
	      	  // 					description: '',
	      	  // 					type: '',
	      	  // 				}
	      	  // 			],
	      	  // 		}
      	  		
      	  	// 	],
      	  	// },
      	  ] 
      	},
      	{ 
      		name: 'Vocabulary',
      	  selected: false, 
      	  sections:[
      	  // 	{
      	  // 		title:'',
      	  // 		description: '',
      	  // 		file: '',
      	  // 		exercises: [
	      	 //  		{
	      	 //  			title: '',
	      	 //  			description: '',
	      	 //  			questions: [
	      	 //  				{
	      	 //  					title: '',
	      	 //  					description: '',
	      	 //  					type: '',
	      	 //  				}
	      	 //  			],
	      	 //  		}
      	  		
      	  // 		],
      	  // 	},
      	   ] 
      	},
      	{ 
      		name: 'Grammar',
      	  selected: false, 
      	  sections:[
      	  // 	{
      	  // 		title:'',
      	  // 		description: '',
      	  // 		file: '',
      	  // 		exercises: [
	      	 //  		{
	      	 //  			title: '',
	      	 //  			description: '',
	      	 //  			questions: [
	      	 //  				{
	      	 //  					title: '',
	      	 //  					description: '',
	      	 //  					type: '',
	      	 //  				}
	      	 //  			],
	      	 //  		}
      	  		
      	  // 		],
      	  // 	},
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
  	openDialogSkill() {
  		this.dialogSkill = true;
  	},
  	btnAddSkill() {
  		this.optionSkillSelected.push(this.dataTitleSkill);
  	},
  	openDialogSection(index) {
  		this.indexSectionCurent = index;
  		this.dialogSection = true;
  	},
  	btnAddSection() {
  		//console.log(this.skills[this.indexSectionCurent]);

  		let data = {
  			title: this.inputTitleSection,
  			description: this.inputDesSection
  		}
  		
  		this.skills[this.indexSectionCurent].sections.push(data);
  		this.tab = this.inputTitleSection;
  		this.dialogSection = false;
  	},
  	openDialogExercise() {
  		//this.indexExerciseCurent = index;
  		this.dialogExercise = true;
  	},
  	openDialogQuestion() {
  		this.dialogQuestion = true;
  	}
  }
}
</script>

<style lang="css" scoped>
.icon-skill {
	padding-right: 10px;
}
.default-padding{
	padding: 0;
	border: none
}
.tab-section{
	text-align: left;
  display: list-item;
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