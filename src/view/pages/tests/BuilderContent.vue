<template>
	<v-app>
		<loading :active.sync="is_call_api"></loading>
		<div class="card card-custom" v-if="!is_loading_page">
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
	              <div class="pb-5" data-wizard-type="step-content" data-wizard-state="current">
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
				                <b-form-input v-model="test_title" size="sm" placeholder="Enter text"></b-form-input>
				              </b-form-group>

											<b-form-group
				                label-cols="4"
				                label-cols-lg="2"
				                label-size="lg"
				                label="Limit Time"
				              >
				                <b-form-checkbox v-model="time_restriction" size="lg"></b-form-checkbox>
				              </b-form-group>

				              <b-form-group
				                label-cols="4"
				                label-cols-lg="2"
				                label-size="lg"
				                label="Description"
				                label-for="textarea"
				                >
			                  <ckeditor :editor="editor" v-model="test_description"></ckeditor>
				              </b-form-group>
				            </div>
									</v-col>
									<v-row>
										<v-col cols="6">
								  		<b-form-group
				                label-cols="4"
				                label-cols-lg="2"
				                label-size="lg"
				                label="Other Tag(s)"
				                >
						            <v-autocomplete
						              v-model="other_tag_type"
						              :disabled="isUpdating"
						              :items="other_tags"
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
						                  @click:close="removeOptionTag(data.item)"
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
								  	</v-col>
										<v-col cols="6">
											<b-form-group
				                label-cols="4"
				                label-cols-lg="2"
				                label-size="lg"
				                label="Rarity"
				                >
						            <v-autocomplete
						              v-model="rarity_tag_type"
						              :disabled="isUpdating"
						              :items="rarity_tags"
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
						                  @click:close="removeOptionTag(data.item)"
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
										</v-col>
								  </v-row>
								  <v-row>
								  	<v-col cols="6">
								  		<b-form-group
				                label-cols="4"
				                label-cols-lg="2"
				                label-size="lg"
				                label="Level(s)"
				                >
						            <v-autocomplete
						              v-model="level_tag_type"
						              :disabled="isUpdating"
						              :items="level_tags"
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
						                  @click:close="removeOptionTag(data.item)"
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
								  	</v-col>
								  	<v-col cols="6">
								  		<b-form-group
				                label-cols="4"
				                label-cols-lg="2"
				                label-size="lg"
				                label="Skill(s)"
				                >
						            <v-autocomplete
						              v-model="skill_tag_type"
						              :disabled="isUpdating"
						              :items="skill_tags"
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
						                  @click:close="removeOptionTag(data.item)"
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
								  	</v-col>
								  </v-row>
								  <v-row>
								  	<v-col cols="6">
								  		<b-form-group
				                label-cols="4"
				                label-cols-lg="2"
				                label-size="lg"
				                label="Vocabulary Tag(s)"
				                >
						            <v-autocomplete
						              v-model="vocabulary_tag_type"
						              :disabled="isUpdating"
						              :items="vocabulary_tags"
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
						                  @click:close="removeOptionTag(data.item)"
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
								  	</v-col>
								  	<v-col cols="6">
								  		<b-form-group
				                label-cols="4"
				                label-cols-lg="2"
				                label-size="lg"
				                label="Grammar Tag(s)"
				                >
						            <v-autocomplete
						              v-model="grammar_tag_type"
						              :disabled="isUpdating"
						              :items="grammar_tags"
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
						                  @click:close="removeOptionTag(data.item)"
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
								  	</v-col>
								  </v-row>
								  <v-row>
								  	<!-- <v-col cols="6">
											<b-form-group
				                label-cols="4"
				                label-cols-lg="2"
				                label-size="lg"
				                label="Grading Scale"
				                >
				              	<v-autocomplete
						              v-model="tag_type"
						              :disabled="isUpdating"
						              :items="tags"
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
						                  @click:close="removeOptionTag(data.item)"
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
										</v-col> -->
								  </v-row>
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
	                <v-card v-if="skills.length">
								    <v-tabs
								      v-model="tabSkill"
											class="tab-skill"
											background-color="#C9F7F5"
								    >
								      <v-tab
								        v-for="(skill, index) in skills"
								      	:id="'skill'+ index"
								        :key="skill.id"
								      >
								        {{ skill.skill_type }}
								      	<v-icon right @click="deleteSkill(index)">mdi-close</v-icon>
								      </v-tab>

								    </v-tabs>

								    <v-tabs-items v-model="tabSkill">
								      <v-tab-item
								        v-for="(skill, index) in skills"
								        :key="skill.id"
								      >
								        <v-card flat>
								          <v-card-text>
								          	<v-tabs vertical v-model="tabSection">
								          		<template v-for="(section, i) in skill.sections">
													      <v-tab v-if="skill.sections.length" :key="i" class="tab-section">
													        <v-icon left>mdi-format-align-justify</v-icon>
													        {{ section.section_title }}
													      </v-tab>
												    	</template>
								     					<v-icon @click="openDialogSection(index)">mdi-plus</v-icon>

															<template v-for="(section, i) in skill.sections">
																<v-tab-item v-if="skill.sections.length" :key="i">
													        <v-card flat class="ml-4">
																		<h3 style="cursor: pointer;" @click="editSection(index, i)">{{section.section_description}}
															    		<v-icon right>mdi-file-document-edit-outline</v-icon>
															    	</h3>
													          <div class="mt-4">
																      <v-btn @click="openDialogElement(index, i)" class="ma-2 btn-add-file" depressed outlined large>
																	      <v-icon left >mdi-file-image</v-icon> Add Element
																	    </v-btn>
																  	</div>
																  	<div class="mt-4" v-if="section.element_type != null && section.element_data != null">
																  		<vuetify-audio v-if="section.element_type =='Audio'" :file="section.element_data" color="success"></vuetify-audio>
																			<v-img style="max-width: 60%; max-height: 450px" v-if="section.element_type =='Image'" :src="section.element_data"></v-img>
																			<div v-if="section.element_type =='Video'" class="videoUpload">
																				<Media
																		      :kind="'video'"
																		      :isMuted="(false)"
																		      :src="section.element_data"
																		      :autoplay="true"
																		      :controls="true"
																		      :ref="'video_player'"
																		    ></Media>
																			</div>
																			<div class="videoUpload" v-if="section.element_type =='Embed_yt'">
																				<youtube player-width="100%" :video-id="videoId(section.element_data)"></youtube>
																			</div>
																			<pdf class="css-element-pdf" v-if="section.element_type =='PDF_file'" :src="section.element_data"></pdf>
																			<ckeditor style="max-height: 450px" v-if="section.element_type =='Post'" :editor="editor" v-model="section.element_data"></ckeditor>
																  	</div>
																  	<div class="mt-4">
																  		<v-btn ref="btnExer" @click="openDialogExercise(index, i)" class="ma-2 btn-add-exer" x-small large>
																	      <v-icon dark>mdi-plus</v-icon>Add Exercise
																	    </v-btn>
																	    <template v-for="(exercise, iExer) in section.exercises">
																		    <div v-if="section.exercises.length" class="ml-12 mt-4" :key="iExer">
																		    	<h4 :id="'exercise'+ iExer">
																		    		{{iExer+1}}. {{exercise.exercise_title}}
																		    		<v-icon @click="editExercise(index, i, iExer)" right>mdi-file-document-edit-outline</v-icon>
																		    		<v-icon @click="deleteExercise(index, i, iExer)" right>mdi-delete</v-icon>
																		    	</h4>
																					<p class="text-description ml-2">{{exercise.exercise_description}}</p>
																					<div style="width: max-content;" v-if="exercise.element_type != null && exercise.element_data != null">
																			  		<vuetify-audio v-if="exercise.element_type =='Audio'" :file="exercise.element_data" color="success"></vuetify-audio>
																						<v-img v-if="exercise.element_type =='Image'" :src="exercise.element_data"></v-img>
																						<div v-if="exercise.element_type =='Video'" class="videoUpload">
																							<Media
																					      :kind="'video'"
																					      :isMuted="(false)"
																					      :src="exercise.element_data"
																					      :autoplay="true"
																					      :controls="true"
																					      :ref="'video_player'"
																					      :style="{width: '100%'}"
																					    ></Media>
																						</div>
																						<div class="videoUpload" v-if="exercise.element_type =='Embed_yt'">
																							<youtube player-width="100%" :video-id="videoId(exercise.element_data)"></youtube>
																						</div>
																						<pdf v-if="exercise.element_type =='PDF_file'" :src="exercise.element_data"></pdf>
																						<ckeditor v-if="exercise.element_type =='Post'" :editor="editor" v-model="exercise.element_data"></ckeditor>
																			  	</div>
																			  	<div>
																			  		<template v-if="exercise.exercise_type == 'Matching'">
																							<template v-for="(body, iBody) in exercise.body">
																								<div style="display: flex;" class="ml-12" :key="iBody">
																									<h5>{{iBody+1}}.</h5>
																									<p style="font-size: medium;">{{body.option}} - {{body.correct}}</p>
																								</div>
																							</template>
																						</template>
																						<template v-else-if="exercise.exercise_type == 'List Selection'">
																							<template v-for="(option, i) in exercise.body">
																			      		<v-row class="ml-12" align="center" :key="i">
																			          	<v-checkbox
																			          		v-model="option.checked"
																			          		:label="option.value"
																					        ></v-checkbox>
																				        </v-row>
																			      	</template>
																						</template>
																						<template v-else-if="exercise.exercise_type =='Short Answer'">
																							<v-textarea
																			          label=""
																								disabled
																			          filled
																			          :value="exercise.body"
																			        ></v-textarea>
																						</template>
																						<template v-else>
																							<v-btn @click="openDialogQuestion(index, i, iExer)" class="ma-2 btn-add-exer" x-small large>
																					      <v-icon dark>mdi-plus</v-icon>Add Question
																					    </v-btn>
																					    <template v-for="(question, iQues) in exercise.questions">
																						    <div v-if="exercise.questions.length" class="ml-12 mt-4" :key="iQues">
																						    	<h4 :id="'question'+ iQues">
																						    		{{iQues+1}}. {{question.title}}
																						    		<v-icon @click="deleteQuestion(index, i, iExer, iQues)" right>mdi-delete</v-icon>
																						    	</h4>
																									<p class="text-description">{{question.description}}</p>
																								  <TypeQuestion :question="question" :exercise_type="exercise.exercise_type" />
																						    </div>
																					  	</template>
																						</template>
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
	                    @click.prevent="submit"
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

			<v-row>
				<v-dialog v-model="dialogElement" persistent max-width="800px">
			    <v-card>
			      <v-card-title>
			      	<v-col cols="11">
			      		<span class="headline">Add Element</span>
			      	</v-col>
			        <v-col cols="1">
			        	<v-icon @click="dialogElement = false" right>mdi-close</v-icon>
			      	</v-col>
			      </v-card-title>
			      <v-card-text>
			        <v-container>
								<v-col cols="12">
									<v-switch v-model="id_pinned" :label="`Pin: ${id_pinned.toString()}`"></v-switch>
								</v-col>
			        	<v-col cols="12">
				          <v-radio-group v-model="type_element" :mandatory="false" row>
							      <v-radio label="Audio" value="Audio"></v-radio>
							      <v-radio label="Video" value="Video"></v-radio>
							      <v-radio label="Embed Youtube" value="Embed_yt"></v-radio>
							      <v-radio label="Image" value="Image"></v-radio>
							      <v-radio label="PDF_file" value="PDF_file"></v-radio>
							      <v-radio label="Post" value="Post"></v-radio>
						    	</v-radio-group>
								</v-col>
								<v-col cols="12">
									<v-file-input small-chips label="Upload file" @change="onElementChange" v-if="type_element != null && type_element != 'Embed_yt' && type_element != 'Post'"></v-file-input>
									<v-text-field label="Link YouTube" v-if="type_element != null && type_element == 'Embed_yt' && type_element != 'Post'" v-model="element_data" required></v-text-field>
									<div>
										<vuetify-audio v-if="type_element =='Audio'" :file="element_data" color="success"></vuetify-audio>
										<v-img v-if="type_element =='Image'" :src="element_data"></v-img>
										<div v-if="type_element =='Video'" class="videoUpload">
											<Media
									      :kind="'video'"
									      :isMuted="(false)"
									      :src="element_data"
									      :autoplay="true"
									      :controls="true"
									      :ref="'video_player'"
									      :style="{width: '100%'}"
									    ></Media>
										</div>
										<div class="videoUpload" v-if="type_element =='Embed_yt'">
											<youtube player-width="100%" :video-id="videoId(element_data)"></youtube>
										</div>
										<pdf v-if="type_element =='PDF_file'" :src="element_data"></pdf>
										<ckeditor v-if="type_element =='Post'" :editor="editor" v-model="element_data"></ckeditor>
									</div>
								</v-col>
			        </v-container>
			      </v-card-text>
			      <v-card-actions>
			        <v-spacer></v-spacer>
			        <v-btn color="blue darken-1" text @click="dialogElement = false">Close</v-btn>
			        <v-btn color="blue darken-1" text @click="btnAddElement">Add</v-btn>
			      </v-card-actions>
			    </v-card>
			  </v-dialog>
			</v-row>

			<v-row justify="center">
			  <v-dialog v-model="dialogSkill" persistent max-width="600px">
			    <v-card>
			      <v-card-title>
			      	<v-col cols="11">
			        	<span class="headline">Add Skill</span>
			      	</v-col>
			      	<v-col cols="1">
			        	<v-icon @click="dialogSkill = false" right>mdi-close</v-icon>
			      	</v-col>
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
			      	<v-col cols="11">
			      		<span v-if="type_form_section == 'add'" class="headline">Add Section</span>
			        	<span v-if="type_form_section == 'update'" class="headline">Edit Section</span>
			      	</v-col>
			        <v-col cols="1">
			        	<v-icon @click="dialogSection = false" right>mdi-close</v-icon>
			      	</v-col>
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
			        <v-btn color="blue darken-1" text v-if="type_form_section == 'add'" @click="btnAddSection">Add</v-btn>
			        <v-btn color="blue darken-1" text v-if="type_form_section == 'update'" @click="btnEditSection">Update</v-btn>
			      </v-card-actions>
			    </v-card>
			  </v-dialog>
			</v-row>

			<v-row justify="center">
			  <v-dialog v-model="dialogExercise" persistent max-width="800px">
			    <v-card>
			      <v-card-title>
			      	<v-col cols="11">
			        	<span v-if="type_form_exercise == 'add'" class="headline">Add Exercise</span>
			        	<span v-if="type_form_exercise == 'update'" class="headline">Edit Exercise</span>
			      	</v-col>
			        <v-col cols="1">
			        	<v-icon @click="dialogExercise = false" right>mdi-close</v-icon>
			      	</v-col>
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
			            <v-col cols="12" sm="6">
			              <v-select
			                :items="typeQuestionName"
			                label="Question type"
			                required
			                v-model="data_type_question"
			              ></v-select>
			            </v-col>

									<template v-if="data_type_question == 'Matching'">
										<v-col cols="3">
				            	<v-btn large @click="addOptionMatching">
										    <v-icon>mdi-plus</v-icon>
										  </v-btn>
				            </v-col>
			            	<v-col cols="7">
			            		<template v-for="(option, i) in optionMatching">
					            	<v-text-field
					            		:key="i"
						              :label="'Question' + (i+1)"
						              :value="option"
						              required
						              @change="changeValueMatching($event, i)"
						            ></v-text-field>
					            </template>
									  </v-col>
									  <v-col cols="12">
									  	<v-btn large>
										    <v-icon>mdi-plus</v-icon> Matching to
										  </v-btn>
									  </v-col>
									  <v-col cols="12">
									  	<template v-for="(option, i) in optionMatching">
									  		<div style="display: flex;" :key="i">
									  			<v-col cols="5">
							              <v-text-field readonly label="Question" :value="option" required></v-text-field>
													</v-col>
													<v-col cols="7">
														<v-text-field v-if="type_form_exercise == 'update'"
															@change="changeValueCorrectMatching($event, i, option)"
															label="Correct"
															required
															:value="correctMatching[i].correct"
															>
														</v-text-field>
														<v-text-field v-else @change="changeValueCorrectMatching($event, i, option)" label="Correct" required></v-text-field>
													</v-col>
									  		</div>
									  	</template>
									  </v-col>
			            </template>
									<template v-if="data_type_question == 'List Selection'">
			            	<v-col cols="3">
			            		<v-btn large @click="addOptionListSelection">
									      <v-icon>mdi-plus</v-icon>
									    </v-btn>
			            	</v-col>
			            	<v-col cols="12">
			            		<template v-for="(option, i) in optionListSelection">
				            		<v-row align="center" :key="i">
						            	<v-checkbox
						            		v-model="option.checked"
						            		hide-details
									        ></v-checkbox>
									        <v-text-field :label="'Option' +i" v-model="option.value"></v-text-field>
									        <v-btn class="mb-2" @click="deleteListSelection(i)"><v-icon>mdi-delete</v-icon></v-btn>
								        </v-row>
							      	</template>
									  </v-col>
									</template>
									<template v-if="data_type_question == 'Short Answer'">
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
				            	<v-textarea
							          filled
							          label=""
							          v-model.trim="correctShortAnswer"
							          ref="correctShortAnswer"
							        ></v-textarea>
					            <!-- <ckeditor :editor="editor" v-model="editorData"></ckeditor> -->
				            </v-col>
				            <v-col>
				            	<v-btn class="btn-add-file" depressed outlined large @click="openDialogShortAnswer">
									      <v-icon left >mdi-plus</v-icon> Add Answer
									    </v-btn>
				            </v-col>
			            </template>
			            <v-col cols="12">
										<v-switch v-model="toggle_element" :label="`Add Element: ${toggle_element.toString()}`"></v-switch>
									</v-col>
			            <v-col cols="12" v-if="toggle_element">
					          <v-radio-group v-model="type_element_exercise" :mandatory="false" row>
								      <v-radio label="Audio" value="Audio"></v-radio>
								      <v-radio label="Video" value="Video"></v-radio>
								      <v-radio label="Embed Youtube" value="Embed_yt"></v-radio>
								      <v-radio label="Image" value="Image"></v-radio>
								      <v-radio label="PDF_file" value="PDF_file"></v-radio>
								      <v-radio label="Post" value="Post"></v-radio>
							    	</v-radio-group>
									</v-col>
									<v-col cols="12" v-if="toggle_element">
										<v-file-input small-chips label="Upload file" @change="onElementExerciseChange" v-if="type_element_exercise != null && type_element_exercise != 'Embed_yt' && type_element_exercise != 'Post'"></v-file-input>
										<v-text-field label="Link YouTube" v-if="type_element_exercise != null && type_element_exercise == 'Embed_yt' && type_element_exercise != 'Post'" v-model="element_data_exercise" required></v-text-field>
										<div>
											<vuetify-audio v-if="type_element_exercise =='Audio'" :file="element_data_exercise" color="success"></vuetify-audio>
											<v-img v-if="type_element_exercise =='Image'" :src="element_data_exercise"></v-img>
											<div v-if="type_element_exercise =='Video'" class="videoUpload">
												<Media
										      :kind="'video'"
										      :isMuted="(false)"
										      :src="element_data_exercise"
										      :autoplay="true"
										      :controls="true"
										      :ref="'video_player'"
										      :style="{width: '100%'}"
										    ></Media>
											</div>
											<div class="videoUpload" v-if="type_element_exercise =='Embed_yt'">
												<youtube player-width="100%" :video-id="videoId(element_data_exercise)"></youtube>
											</div>
											<pdf v-if="type_element_exercise =='PDF_file'" :src="element_data_exercise"></pdf>
											<ckeditor v-if="type_element_exercise =='Post'" :editor="editor" v-model="element_data_exercise"></ckeditor>
										</div>
									</v-col>
			          </v-row>
			        </v-container>
			      </v-card-text>
			      <v-card-actions>
			        <v-spacer></v-spacer>
			        <v-btn color="blue darken-1" text @click="dialogExercise = false">Close</v-btn>
			        <v-btn color="blue darken-1" text v-if="type_form_exercise == 'add'" @click="btnAddExercise">Add</v-btn>
			        <v-btn color="blue darken-1" text v-if="type_form_exercise == 'update'" @click="btnEditExercise">Update</v-btn>
			      </v-card-actions>
			    </v-card>
			  </v-dialog>
			</v-row>

			<v-row justify="center">
			  <v-dialog v-model="dialogQuestion" persistent max-width="900px">
			    <v-card>
			      <v-card-title>
			      	<v-col cols="11">
			        	<span class="headline">Add Question</span>
			      	</v-col>
							<v-col cols="1">
			        	<v-icon @click="dialogQuestion = false" right>mdi-close</v-icon>
			      	</v-col>
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
			            	<v-text-field
			            	  v-model="data_type_question"
				              label="Type Question"
				              required
				              readonly
				            ></v-text-field>
				           </v-col>
			            <template v-if="data_type_question == 'True/False/Not Given'">
			            	<v-col cols="12">
				            	<v-radio-group v-model="correctTrueFalse">
										    <v-radio label="True" value="true"></v-radio>
										    <v-radio label="False" value="false"></v-radio>
										    <v-radio label="Not Given" value="not given"></v-radio>
										  </v-radio-group>
									  </v-col>
			            </template>
			            <template v-if="data_type_question == 'Yes/No/Not Given'">
			            	<v-col cols="12">
				            	<v-radio-group v-model="correctYesNo">
										    <v-radio label="Yes" value="yes"></v-radio>
										    <v-radio label="No" value="no"></v-radio>
										    <v-radio label="Not Given" value="not given"></v-radio>
										  </v-radio-group>
									  </v-col>
			            </template>
			            <template v-if="data_type_question == 'Single Choice'">
			            	<v-col cols="3">
			            		<v-btn large @click="addOptionSingleChoice">
									      <v-icon>mdi-plus</v-icon>
									    </v-btn>
			            	</v-col>
			            	<v-col cols="12">
				            	<v-radio-group v-model="correctSingleChoice">
				            		<template v-for="(option, i) in optionAnswerSingleChoice">
											    <v-radio :value="option" :key="i">
										        <template v-slot:label>
										          <v-text-field :label="'Option'+i" :value="option" @change="changeValueSingleChoice($event, i)"></v-text-field>
										          <v-btn class="mb-2"><v-icon @click="deleteOptionSingleChoice(i)">mdi-delete</v-icon></v-btn>
										        </template>
										      </v-radio>
				            		</template>
										  </v-radio-group>
									  </v-col>
			            </template>
			            <template v-if="data_type_question == 'Single Select'">
			            	<v-col cols="3">
			            		<v-btn large @click="addOptionSingleSelect">
									      <v-icon>mdi-plus</v-icon>
									    </v-btn>
			            	</v-col>
			            	<v-col cols="12">
				            	<v-radio-group v-model="correctSingleSelect">
				            		<template v-for="(option, i) in optionAnswerSingleSelect">
											    <v-radio :value="option" :key="i">
										        <template v-slot:label>
										          <v-text-field :label="'Option' + i" :value="option" @change="changeValueSingleSelect($event, i)"></v-text-field>
										          <v-btn class="mb-2" @click="deleteOptionSingleSelect(i)"><v-icon>mdi-delete</v-icon></v-btn>
										        </template>
										      </v-radio>
				            		</template>
										  </v-radio-group>
									  </v-col>
			            </template>
			            <template v-if="data_type_question == 'Multiple Choice'">
			            	<v-col cols="3">
			            		<v-btn large @click="addOptionMultipleChoice">
									      <v-icon>mdi-plus</v-icon>
									    </v-btn>
			            	</v-col>
			            	<v-col cols="12">
			            		<template v-for="(option, i) in optionAnswerMultipleChoice">
				            		<v-row align="center" :key="i">
						            	<v-checkbox
						            		v-model="option.checked"
						            		hide-details
									        ></v-checkbox>
									        <v-text-field :label="'Option' +i" v-model="option.value"></v-text-field>
									        <v-btn class="mb-2" @click="deleteOptionMultipleChoice(i)"><v-icon>mdi-delete</v-icon></v-btn>
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
			        <v-btn color="blue darken-1" text @click="btnAddQuestion">Add</v-btn>
			      </v-card-actions>
			    </v-card>
			  </v-dialog>
			</v-row>

			<v-row justify="center">
			  <v-dialog v-model="dialogShortAnswer" persistent max-width="600px">
			    <v-card>
			      <v-card-title>
			        <v-col cols="11">
			        	<span class="headline">Add Short Answer</span>
			        </v-col>
			        <v-col cols="1">
			        	<v-icon @click="dialogShortAnswer = false" right>mdi-close</v-icon>
			      	</v-col>
			      </v-card-title>
			      <v-card-text>
			        <v-container>
			          <v-row>
			          	<v-col cols="3">
		            		<v-btn large @click="addOptionShortAnswer">
								      <v-icon>mdi-plus</v-icon>
								    </v-btn>
		            	</v-col>
			            <v-col cols="12">
			            	<v-radio-group v-model="correctOptShortAn">
			            		<template v-for="(option, i) in optionShortAnswer">
										    <v-radio :value="option" :key="i">
									        <template v-slot:label>
									          <v-text-field :label="'Option'+i" :value="option" @change="changeValueShortAnswer($event, i)"></v-text-field>
									          <v-btn class="mb-2"><v-icon @click="deleteOptionShortAnswer(i)">mdi-delete</v-icon></v-btn>
									        </template>
									      </v-radio>
			            		</template>
									  </v-radio-group>
								  </v-col>
			          </v-row>
			        </v-container>
			      </v-card-text>
			      <v-card-actions>
			        <v-spacer></v-spacer>
			        <v-btn color="blue darken-1" text @click="dialogShortAnswer = false">Close</v-btn>
			        <v-btn color="blue darken-1" text @click="btnAddShortAn">Add</v-btn>
			      </v-card-actions>
			    </v-card>
			  </v-dialog>
			</v-row>
      <div style="position: fixed; right: 20px; bottom: 80px" v-if="dataScroll.length">
        <v-hover v-slot:default="{ hover }" open-delay="200">
  				<v-card class="mx-auto" max-width="180" style="padding: 15px;">
            <template v-for="(exercise, iExer) in dataScroll">
              <div :key="iExer">
    				    <h4 class="text-truncate text-scroll" v-scroll-to="'#exercise'+ iExer">
    				      {{iExer +1}}. {{exercise.exercise_title}}
    				    </h4>
                <template v-for="(question, iQues) in exercise.questions">
                  <p v-scroll-to="'#question'+ iQues" class="pl-4 text-truncate text-scroll" :key="iQues">
                    {{iQues+1}}. {{ question.title }}
                  </p>
                </template>
              </div>
            </template>
  			  </v-card>
        </v-hover>
			</div>
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
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { getIdFromURL } from 'vue-youtube-embed';
import ApiService from "@/service/api.service";
import 'vue-loading-overlay/dist/vue-loading.css';

export default {

  name: 'BuilderContent',
	components: {
		TypeQuestion: () => import('./TypeQuestion.vue'),
		VuetifyAudio: () => import('vuetify-audio'),
		Media: () => import('@dongido/vue-viaudio'),
		pdf: () => import('vue-pdf'),
		Loading: () => import('vue-loading-overlay'),
	},
  data () {
    return {
    	is_call_api: false,
    	is_loading_page: true,
    	test_title: '',
    	time_restriction: false,
    	test_description: '',
    	id_pinned: false,
    	type_element: null,
    	element_data: null,
      element_file: null,
    	type_element_exercise: null,
    	element_data_exercise: null,
      element_file_exercise: null,
    	editor: ClassicEditor,
    	data_type_question: 'None',
    	dialogElement: false,
    	dialogSkill: false,
    	dialogSection:false,
    	dialogExercise: false,
    	toggle_element: false,
    	dialogQuestion: false,
    	dialogShortAnswer:false,
    	indexSkill: null,
    	indexSection: null,
    	indexExercise: null,
    	dataTitleSkill: null,
    	inputTitleSection: '',
    	inputDesSection: '',
    	inputTitleExercise: '',
    	inputDesExercise: '',
    	inputTitleQuestion: '',
    	inputDesQuestion: '',
    	radioTrueFalse: null,
    	correctShortAnswer: null,
    	correctYesNo: null,
    	correctTrueFalse: null,
    	radioYesNo: null,
    	correctSingleChoice: null,
    	optionAnswerSingleChoice: ['Option 1', 'Option 2'],
    	correctSingleSelect: null,
    	optionAnswerSingleSelect: ['Option 1', 'Option 2'],
    	optionAnswerMultipleChoice: [{ value:'Option 1', checked: false}, { value:'Option 2', checked: false}],
    	correctOptShortAn: null,
    	optionShortAnswer: ['Option 1', 'Option 2'],
    	correctMatching: [],
    	optionMatching: ['Option 1', 'Option 2'],
    	optionListSelection: [{ value:'Option 1', checked: false}, { value:'Option 2', checked: false}],

    	tabSkill: null,
    	tabSection: null,
    	type_form_section: null,
    	type_form_exercise: null,

			autoUpdate: true,
	    isUpdating: false,

	    level_tag_type: [],
	    level_tags: [],
	    rarity_tag_type: [],
	    rarity_tags: [],
	    grammar_tag_type: [],
	    grammar_tags: [],
	    vocabulary_tag_type: [],
	    vocabulary_tags: [],
	    other_tag_type: [],
	    other_tags: [],
	    skill_tag_type: [],
	    skill_tags: [],
	    optionSkill:['Speaking','Reading','Writing','Listing','Vocabulary','Grammar'],
      typeQuestionName: ['None' ,'Short Answer', 'True/False/Not Given', 'Yes/No/Not Given', 'Single Choice', 'Single Select', 'Multiple Choice', 'Paragraph', 'File Upload', 'Matching', 'List Selection'],
      typeQUestionValue: [0 , 1, 21, 22, 2, 3, 4, 5, 6],
      skills: [],
    }
  },
  computed: {
    dataScroll: function () {
      // if(this.skills.length && this.skills[this.tabSkill] != undefined) {
      //   if(this.skills[this.tabSkill].sections != undefined && this.skills[this.tabSkill].sections[this.tabSection] != undefined) {
      //     if(this.skills[this.tabSkill].sections[this.tabSection].exercises != undefined){
      //       return this.skills[this.tabSkill].sections[this.tabSection].exercises;
      //     }
      //   }
      // }
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
      //wizardObj.stop();
    });
    // Change event
    wizard.on("change", function(/*wizardObj*/) {
      setTimeout(() => {
        KTUtil.scrollTop();
      }, 500);
    });
  },
  created() {
  	window.addEventListener('scroll', this.handleScroll);
  	this.is_loading_page = true;
  	this.getAllTag();
  	this.is_loading_page = false;
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  watch: {
    isUpdating (val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000)
      }
    },
    type_element() {
    	this.element_data = null;
    },
    type_element_exercise() {
    	this.element_data_exercise = null;
    },
  },
  methods: {
  	handleScroll(e) {

    },
  	videoId(element_data) {
  		if(element_data) return getIdFromURL(element_data);
 		  else return '';
  	},
  	async getAllTag() {
  		let seft = this;
  		await ApiService.get('tags-by-types')
  		.then(function (response) {
  			seft.grammar_tags = response.data.data['grammar'];
  			seft.other_tags = response.data.data['others'];
  			seft.skill_tags = response.data.data['skill'];
  			seft.grammar_tags = response.data.data['vocabulary'];
  			seft.rarity_tags = response.data.data['rarity'];
  			seft.level_tags = response.data.data['level'];
  		})
  	},
    async submit() {
    	this.is_call_api = true;
    	let data = {
    		test_title: this.test_title,
    		test_description: this.test_description,
    		time_restriction: (this.time_restriction == true) ? 1 : 0,
    		skills: this.skills,
    	};
    	await ApiService.post('create-test', data)
    	.then(function (response) {
			  console.log(response);
			  this.is_call_api = false;
			  Swal.fire({
	        title: "",
	        text: "The application has been successfully submitted!",
	        icon: "success",
	        confirmButtonClass: "btn btn-secondary"
	      });
			})
			.catch(function (error) {
			  console.log(error);
			});
    },
    removeOptionTag(item) {
    	let index;
    	if(item.type_label == 'Others'){
      	index = this.other_tag_type.indexOf(item.name)
      	if (index >= 0) this.other_tag_type.splice(index, 1)
    	} else if(item.type_label == "Skill") {
				index = this.skill_tag_type.indexOf(item.name)
      	if (index >= 0) this.skill_tag_type.splice(index, 1)
    	} else if(item.type_label == "Vocabulary") {
				index = this.vocabulary_tag_type.indexOf(item.name)
      	if (index >= 0) this.vocabulary_tag_type.splice(index, 1)
    	} else if(item.type_label == "Rarity") {
				index = this.rarity_tag_type.indexOf(item.name)
      	if (index >= 0) this.rarity_tag_type.splice(index, 1)
    	} else if(item.type_label == "Grammar") {
				index = this.grammar_tag_type.indexOf(item.name)
      	if (index >= 0) this.grammar_tag_type.splice(index, 1)
    	} else if(item.type_label == "Level") {
				index = this.level_tag_type.indexOf(item.name)
      	if (index >= 0) this.level_tag_type.splice(index, 1)
    	}
    },
  	openDialogSkill() {
  		this.dialogSkill = true;
  	},
  	btnAddSkill() {
  		if (this.dataTitleSkill != null) {
  			let data = {
  				skill_type: this.dataTitleSkill,
  				skill_description: '',
  				duration: 1800,
  			}
  			this.skills.push(data);
  			this.optionSkill.splice(this.optionSkill.findIndex(e => e === this.dataTitleSkill), 1);
  			this.tabSkill = this.skills.length - 1;
  			this.dataTitleSkill = null;
  		}
  		this.dialogSkill = false;
  	},
  	deleteSkill(index) {
  		Swal.fire({
			  title: 'Are you sure you want to delete?',
			  icon: 'warning',
			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: 'Yes, delete it!'
			}).then((result) => {
				if (result.value) {
				  let data = this.skills[index].name;
		  		this.skills.splice(index, 1);
		  		this.optionSkill.push(data);
	  		}
			})
  	},
  	onElementChange(file) {
      let vm = this;
      vm.element_file = file;
    	if(file == undefined){
    		vm.element_data = null;
    		return
    	}
  		let reader = new FileReader();
      reader.onload = (e) => {
        vm.element_data = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    openDialogElement(indexSkill = null, indexSection = null){
    	this.indexSkill 		= indexSkill;
  		this.indexSection 	= indexSection;
    	this.dialogElement = true;
    },
    getValueElement(type){
      let valueElement;
      if(type == 'Audio') valueElement = 7;
      else if( type == 'Image') valueElement = 2;
      else if( type == 'Video') valueElement = 5;
      else if( type == 'Embed_yt') valueElement = 4;
      else if( type == 'Post') valueElement = 6;
      else if( type == 'PDF_file') valueElement = 8;
      return valueElement;
    },
    async btnAddElement() {
      this.is_call_api = true;
      let seft = this;
      let valueElement = this.getValueElement(this.type_element);
      let formData = new FormData();
      formData.append('type', valueElement);
      formData.append('url', this.element_data);
      formData.append('editor', this.element_data);
      formData.append('file', this.element_file);
      await ApiService.post('upload-element', formData)
      .then(function (response) {
        if(response){
        	seft.skills[seft.indexSkill].sections[seft.indexSection].element_type = seft.type_element;
        	seft.skills[seft.indexSkill].sections[seft.indexSection].element_data = seft.element_data;
        	seft.skills[seft.indexSkill].sections[seft.indexSection].is_element_pinned = seft.id_pinned;
          seft.skills[seft.indexSkill].sections[seft.indexSection].element_id = response.data.element_code;
        	seft.type_element = null,
        	seft.element_data = null,
        	seft.element_data = false,
        	seft.dialogElement = false;
          seft.is_call_api = false;
        }
      })
    },
  	openDialogSection(index) {
  		this.type_form_section = 'add';
  		this.inputTitleSection = null;
			this.inputDesSection = null;
  		this.indexSkill = index;
  		this.dialogSection = true;
  	},
  	btnAddSection() {
  		let data = {
  			section_title: this.inputTitleSection,
  			section_description: this.inputDesSection
  		}
  		let dataCheck = this.skills[this.indexSkill].sections;
  		if(dataCheck == undefined || dataCheck == null) {
  			this.skills[this.indexSkill].sections = [];
  		}
  		this.skills[this.indexSkill].sections.push(data);
  		this.tabSection = this.skills[this.indexSkill].sections.length - 1;
  		this.dialogSection = false;
  	},
  	editSection(indexSkill, indexSection) {
  		this.dialogSection = true;
  		this.type_form_section = 'update';
  		this.indexSkill 		= indexSkill;
  		this.indexSection 	= indexSection;
  		let data = this.skills[indexSkill].sections[indexSection];
  		this.inputTitleSection = data.section_title;
			this.inputDesSection = data.section_description;
  	},
  	btnEditSection() {
  		let data = {
  			section_title: this.inputTitleSection,
  			section_description: this.inputDesSection
  		}
  		this.skills[this.indexSkill].sections.splice(this.indexSection, 1, data);
  		this.dialogSection = false;
  	},
  	openDialogExercise(indexSkill, indexSection) {
  		this.type_form_exercise = 'add';
  		this.inputTitleExercise = null;
			this.inputDesExercise = null;
			this.data_type_question = null;
			this.type_element_exercise = null;
			this.element_data_exercise = null;
			this.toggle_element = false;
  		this.indexSkill 	= indexSkill;
  		this.indexSection = indexSection;
  		this.dialogExercise = true;
  		this.optionMatching = ['Option 1', 'Option 2'];
  		this.correctMatching = [];
  		this.optionListSelection = [{ value:'Option 1', checked: false}, { value:'Option 2', checked: false}];
  		this.correctShortAnswer = null;
  	},
  	onElementExerciseChange(file) {
  		let vm = this;
      vm.element_file_exercise = file;
    	if(file == undefined){
    		vm.element_data_exercise = null;
    		return
    	}
  		let reader = new FileReader();
      reader.onload = (e) => {
        vm.element_data_exercise = e.target.result;
      };
      reader.readAsDataURL(file);
  	},
  	async btnAddExercise() {
      let seft = this;
      let element_id = null;
      if(seft.toggle_element) {
        seft.is_call_api = true;
        let formData = new FormData();
        let valueElement = seft.getValueElement(seft.type_element_exercise);
        formData.append('type', valueElement);
        formData.append('url', seft.element_data_exercise);
        formData.append('editor', seft.element_data_exercise);
        formData.append('file', seft.element_file_exercise);
        await ApiService.post('upload-element', formData)
        .then(function (response) {
          element_id = response.data.element_code;
          seft.is_call_api = false;
        })
      }

  		let body;
  		if(this.data_type_question == "Matching") {
  			body = this.correctMatching;
  		} else if(this.data_type_question == "List Selection") {
  			body = this.optionListSelection;
  		} else if (this.data_type_question == "Short Answer") {
  			body = this.correctShortAnswer;
  		} else {
  			body = null;
  		}

  		let data = {
  			exercise_title: this.inputTitleExercise,
  			exercise_description: this.inputDesExercise,
  			exercise_type: this.data_type_question,
  			element_type: this.type_element_exercise,
  			element_data: this.element_data_exercise,
  			element_id: element_id,
        is_element: this.toggle_element,
  			body: body,
  		}
  		let dataCheck = this.skills[this.indexSkill].sections[this.indexSection].exercises;
  		if(dataCheck == undefined || dataCheck == null) {
  			this.skills[this.indexSkill].sections[this.indexSection].exercises= [];
  		}
  		this.skills[this.indexSkill].sections[this.indexSection].exercises.push(data);
  		this.dialogExercise = false;
  	},
  	editExercise(indexSkill, indexSection, indexExercise) {
			this.type_form_exercise = 'update';
  		this.dialogExercise = true;
			this.indexSkill 		= indexSkill;
  		this.indexSection 	= indexSection;
  		this.indexExercise 	= indexExercise;
  		let data = this.skills[indexSkill].sections[indexSection].exercises[indexExercise];
  		this.inputTitleExercise = data.exercise_title;
			this.inputDesExercise = data.exercise_description;
			this.data_type_question = data.exercise_type;
			this.type_element_exercise = data.element_type;
			this.element_data_exercise = data.element_data;
			this.toggle_element = data.is_element;
			if(data.exercise_type == 'Matching') {
				this.correctMatching = data.body;
				this.optionMatching = data.body.map(function(item) {
				  return item.option;
				});
			} else if(data.exercise_type == 'List Selection') {
				this.optionListSelection = data.body;
			} else if(data.exercise_type == 'Short Answer') {
				this.correctShortAnswer = data.body;
			}
  	},
  	deleteExercise(indexSkill, indexSection, indexExercise) {
  		let seft = this;
  		Swal.fire({
			  title: 'Are you sure you want to delete?',
			  icon: 'warning',
			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: 'Yes, delete it!'
			}).then((result) => {
				if (result.value) {
		  		seft.skills[indexSkill].sections[indexSection].exercises.splice(indexExercise, 1);
	  		}
			})
  	},
  	async btnEditExercise() {
      let seft = this;
      let element_id = null;
      if(seft.toggle_element) {
        seft.is_call_api = true;
        let formData = new FormData();
        let valueElement = seft.getValueElement(seft.type_element_exercise);
        formData.append('type', valueElement);
        formData.append('url', seft.element_data_exercise);
        formData.append('editor', seft.element_data_exercise);
        formData.append('file', seft.element_file_exercise);
        await ApiService.post('upload-element', formData)
        .then(function (response) {
          element_id = response.data.element_code;
          seft.is_call_api = false;
        })
      }

  		let body;
  		if(this.data_type_question == "Matching") {
  			body = this.correctMatching;
  		} else if(this.data_type_question == "List Selection") {
  			body = this.optionListSelection;
  		} else if(this.data_type_question == "Short Answer") {
  			body = this.correctShortAnswer;
  		} else {
  			body = null;
  		}
  		let data = {
  			exercise_title: this.inputTitleExercise,
  			exercise_description: this.inputDesExercise,
  			exercise_type: this.data_type_question,
  			element_type: this.type_element_exercise,
  			element_data: this.element_data_exercise,
  			element_id: element_id,
        is_element: this.toggle_element,
  			body: body,
  		}
  		this.skills[this.indexSkill].sections[this.indexSection].exercises.splice(this.indexExercise, 1, data);
  		this.dialogExercise = false;
  	},
  	openDialogQuestion(indexSkill, indexSection, indexExercise) {
  		this.indexSkill 		= indexSkill;
  		this.indexSection 	= indexSection;
  		this.indexExercise 	= indexExercise;
  		this.data_type_question = this.skills[this.indexSkill].sections[this.indexSection].exercises[this.indexExercise].exercise_type;
  		this.inputTitleQuestion = null;
			this.inputDesQuestion = null;
			this.correctYesNo = 'no';
			this.correctTrueFalse = false;
			this.correctSingleChoice = null;
			this.correctSingleSelect = null;
			this.correctOptShortAn = null;
  		this.dialogQuestion = true;
  	},
  	btnAddQuestion() {
  		let data = {
  			title: this.inputTitleQuestion,
  			description: this.inputDesQuestion,
  		}
  		let dataCheck = this.skills[this.indexSkill].sections[this.indexSection].exercises[this.indexExercise].questions;
  		if(dataCheck == undefined || dataCheck == null) {
  			this.skills[this.indexSkill].sections[this.indexSection].exercises[this.indexExercise].questions = [];
  		}
  		let indexRowQuestion = this.skills[this.indexSkill].sections[this.indexSection].exercises[this.indexExercise].questions.push(data) -1;

			this.actionAddAnswer(indexRowQuestion, this.skills[this.indexSkill].sections[this.indexSection].exercises[this.indexExercise].exercise_type);
  		this.dialogQuestion = false;
  	},
  	deleteQuestion(indexSkill, indexSection, indexExercise, indexQuestion) {
  		let seft = this;
  		Swal.fire({
			  title: 'Are you sure you want to delete?',
			  icon: 'warning',
			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: 'Yes, delete it!'
			}).then((result) => {
				if (result.value) {
		  		seft.skills[indexSkill].sections[indexSection].exercises[indexExercise].questions.splice(indexQuestion, 1);
	  		}
			})
  	},
  	actionAddAnswer(indexRowQuestion, exercise_type) {
  		let optionAnswer, correctAnswer;

  		if (exercise_type == 'True/False/Not Given') {
  			optionAnswer = ['True', 'False','Not Given'];
  			correctAnswer = this.correctTrueFalse;
  		}
  		else if (exercise_type == 'Yes/No/Not Given') {
  			optionAnswer = ['Yes', 'No','Not Given'];
  			correctAnswer = this.correctYesNo;
  		}
  		else if (exercise_type == 'Single Choice') {
  			optionAnswer = this.optionAnswerSingleChoice;
  			correctAnswer = this.correctSingleChoice;
  		}
  		else if (exercise_type == 'Single Select') {
  			optionAnswer = this.optionAnswerSingleSelect;
  			correctAnswer = this.correctSingleSelect;
  		}
  		else if (exercise_type == 'Multiple Choice') {
  			optionAnswer = this.optionAnswerMultipleChoice;
  			correctAnswer = null;
  		}

  		let dataAnswer = {
				option: optionAnswer,
				correct: correctAnswer,
			}
			let dataCheck = this.skills[this.indexSkill].sections[this.indexSection].exercises[this.indexExercise].questions[indexRowQuestion].answers;
  		if(dataCheck == undefined || dataCheck == null) {
  			this.skills[this.indexSkill].sections[this.indexSection].exercises[this.indexExercise].questions[indexRowQuestion].answers = [];
  		}
  		this.skills[this.indexSkill].sections[this.indexSection].exercises[this.indexExercise].questions[indexRowQuestion].answers.push(dataAnswer);
  	},
  	openDialogShortAnswer() {
  		this.optionShortAnswer = ['Option 1', 'Option 2'];
  		this.dialogShortAnswer = true;
  	},
  	btnAddShortAn() {
  		let insertFirst = '{{';
  		let insertLast = '}}';
  		let self = this;
		  let tArea = this.$refs.correctShortAnswer;
			// get cursor's position:
		  let startPos = tArea.selectionStart;
		  //let endPos = tArea.selectionEnd;
		  let cursorPos = startPos;
		  let tmpStr = tArea.value;
		  if (0 == cursorPos) {
		    return;
		  }
		  // insert:
		  //self.correctShortAnswer = tmpStr.substring(0, startPos)+ insertFirst + insertLast + tmpStr.substring(endPos, tmpStr.length);
		  self.correctShortAnswer = tmpStr + ' ' +insertFirst + this.optionShortAnswer.join("/") + insertLast;
		  //move cursor:
		  setTimeout(() => {
		    cursorPos += insertFirst.length;
		    tArea.selectionStart = tArea.selectionEnd = cursorPos;
		  }, 10);
		  this.dialogShortAnswer = false;
  	},
  	changeValueSingleChoice(event, i) {
  		this.optionAnswerSingleChoice.splice(i, 1, event);
  	},
  	addOptionSingleChoice() {
  		let index = this.optionAnswerSingleChoice.length +1;
  		let data = 'Option ' + index;
			this.optionAnswerSingleChoice.push(data);
  	},
  	deleteOptionSingleChoice(i) {
  		this.optionAnswerSingleChoice.splice(i, 1);
  	},
  	changeValueSingleSelect(event, i) {
  		this.optionAnswerSingleSelect.splice(i, 1, event);
  	},
  	addOptionSingleSelect() {
  		let index = this.optionAnswerSingleSelect.length +1;
  		let data = 'Option ' + index;
			this.optionAnswerSingleSelect.push(data);
  	},
  	deleteOptionSingleSelect(i) {
  		this.optionAnswerSingleSelect.splice(i, 1);
  	},
  	addOptionShortAnswer() {
  		let index = this.optionShortAnswer.length +1;
  		let data = 'Option ' + index;
			this.optionShortAnswer.push(data);
  	},
		changeValueShortAnswer(event, i) {
  		this.optionShortAnswer.splice(i, 1, event);
  	},
  	deleteOptionShortAnswer(i) {
  		this.optionShortAnswer.splice(i, 1);
  	},
  	addOptionMultipleChoice() {
  		let index = this.optionAnswerMultipleChoice.length +1;
  		let data = {
  			value: 'Option ' + index,
  			checked: false,
  		}
			this.optionAnswerMultipleChoice.push(data);
  	},
  	deleteOptionMultipleChoice(i){
  		this.optionAnswerMultipleChoice.splice(i, 1);
  	},
  	addOptionMatching() {
  		let index = this.optionMatching.length +1;
  		let data = 'Option ' + index;
			this.optionMatching.push(data).length;
			if(this.type_form_exercise == 'update') {
				let dataMatching = {
					correct: ''
				}
				this.correctMatching.push(dataMatching);
			}
  	},
  	changeValueMatching(event, i) {
  		this.optionMatching.splice(i, 1, event);
  	},
  	changeValueCorrectMatching(event, i, option) {
			if(this.correctMatching[i]) {
			  this.correctMatching[i].correct = event;
			  this.correctMatching[i].option = option;
			} else{
				this.correctMatching.push({
					correct: event,
					option: option,
				});
			}
  	},
  	addOptionListSelection() {
  		let index = this.optionListSelection.length +1;
  		let data = {
  			value: 'Option ' + index,
  			checked: false,
  		}
			this.optionListSelection.push(data);
  	},
  	deleteListSelection(i){
  		this.optionListSelection.splice(i, 1);
  	},
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
.text-description{
	font-size: large;
  max-width: 600px;
  font-style: oblique;
}
.videoUpload{
	max-width: 60%;
}
.css-element-pdf{
	position: relative;
  display: inline;
  max-width: 60%;
  max-height: 450px;
}
.text-scroll{
  cursor: pointer;
}
</style>
