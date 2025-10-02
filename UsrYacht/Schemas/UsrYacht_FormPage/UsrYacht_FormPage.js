define("UsrYacht_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrYacht"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "4fe68738-48d0-478c-8ae4-c4c167c53331",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "AddYachtRentalSetButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(AddYachtRentalSetButton_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "add-button-icon",
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrAutomateCreateSetofYachtRentals",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "YatchId"
						}
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YachtNumber",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_UsrNumber_uc0kh17",
					"labelPosition": "auto",
					"control": "$PDS_UsrNumber_uc0kh17",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "YachtPrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_6tzuc0k",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrice_6tzuc0k"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "YachtTicketPrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrTicketPrice_pmu6rhh",
					"labelPosition": "auto",
					"control": "$PDS_UsrTicketPrice_pmu6rhh"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "YachtLength",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrLength_xpyodhf",
					"labelPosition": "auto",
					"control": "$PDS_UsrLength_xpyodhf"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YachtCaptain",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCaptain_uu4gp48",
					"labelPosition": "auto",
					"control": "$PDS_UsrCaptain_uu4gp48",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "YachtCrewCount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCrewCount_uhnnvdx",
					"labelPosition": "auto",
					"control": "$PDS_UsrCrewCount_uhnnvdx"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "YachtDriveType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrDriveType_u5pkjr7",
					"labelPosition": "auto",
					"control": "$PDS_UsrDriveType_u5pkjr7",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "YachtPassengersCount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPassengersCount_28kxzo8",
					"labelPosition": "auto",
					"control": "$PDS_UsrPassengersCount_28kxzo8"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "YachtStatus",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrStatus_rjjq9bb",
					"labelPosition": "auto",
					"control": "$PDS_UsrStatus_rjjq9bb",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "YachtComment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_UsrComment_yn23q5y",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_yn23q5y"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "YachtManager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_tbe9n4w",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_tbe9n4w",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ExpansionPanelYachtRental",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanelYachtRental_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_u3r2uaz",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanelYachtRental",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_khdw66r",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_u3r2uaz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtnYachtRental",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtnYachtRental_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrYachtRentals",
							"defaultValues": [
								{
									"attributeName": "UsrParentYacht",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_khdw66r",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtnYachtRental",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtnYachtRental_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "YachtRentalGridDetailDS"
						}
					}
				},
				"parentName": "FlexContainer_khdw66r",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtnYachtRental",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtnYachtRental_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_khdw66r",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_ft6yuef",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_ft6yuef_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "YachtRentalGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtnYachtRental",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_cjdtzaw",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_cjdtzaw_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYachtRentals"
						}
					}
				},
				"parentName": "GridDetailSettingsBtnYachtRental",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilterYachtRental",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilterYachtRental_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilterYachtRental_GridDetail_dh5d36t",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_dh5d36t"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilterYachtRental_SearchValue",
							"GridDetailSearchFilterYachtRental_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_khdw66r",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_4jhokg8",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanelYachtRental",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YachtRentalGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_dh5d36t",
					"activeRow": "$GridDetail_dh5d36t_ActiveRow",
					"selectionState": "$GridDetail_dh5d36t_SelectionState",
					"primaryColumnName": "YachtRentalGridDetailDS_Id",
					"columns": [
						{
							"id": "b973472f-0d37-baab-eb9d-ede58fa641fe",
							"code": "YachtRentalGridDetailDS_CreatedOn",
							"caption": "#ResourceString(YachtRentalGridDetailDS_CreatedOn)#",
							"dataValueType": 7,
							"width": 135
						},
						{
							"id": "e94a8155-45ab-1c35-01bc-10408c2ac139",
							"code": "YachtRentalGridDetailDS_UsrRentalStart",
							"caption": "#ResourceString(YachtRentalGridDetailDS_UsrRentalStart)#",
							"dataValueType": 7,
							"width": 144
						},
						{
							"id": "8abe12c5-1ccf-2e74-fd94-65983fe94d80",
							"code": "YachtRentalGridDetailDS_UsrRentalEnd",
							"caption": "#ResourceString(YachtRentalGridDetailDS_UsrRentalEnd)#",
							"dataValueType": 7,
							"width": 136
						},
						{
							"id": "fa508150-dce2-d709-a5e5-0d5e9fce352a",
							"code": "YachtRentalGridDetailDS_UsrTotalPrice",
							"caption": "#ResourceString(YachtRentalGridDetailDS_UsrTotalPrice)#",
							"dataValueType": 32,
							"width": 158
						},
						{
							"id": "e3657382-052c-13a4-596d-177876400fe8",
							"code": "YachtRentalGridDetailDS_UsrManager",
							"caption": "#ResourceString(YachtRentalGridDetailDS_UsrManager)#",
							"dataValueType": 10,
							"width": 116
						},
						{
							"id": "bdb4668d-079b-a468-c043-4140ea6309a9",
							"code": "YachtRentalGridDetailDS_UsrCustomer",
							"caption": "#ResourceString(YachtRentalGridDetailDS_UsrCustomer)#",
							"dataValueType": 10,
							"width": 128
						},
						{
							"id": "13581bc8-a171-20ab-150f-55da28a28887",
							"code": "YachtRentalGridDetailDS_UsrComment",
							"caption": "#ResourceString(YachtRentalGridDetailDS_UsrComment)#",
							"dataValueType": 28,
							"width": 250
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_4jhokg8",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrNumber_uc0kh17": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrPrice_6tzuc0k": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MinValueValidation": {
								"type": "mii.MinValueValidator",
								"params": {
									"minValue": 100,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrTicketPrice_pmu6rhh": {
						"modelConfig": {
							"path": "PDS.UsrTicketPrice"
						}
					},
					"PDS_UsrLength_xpyodhf": {
						"modelConfig": {
							"path": "PDS.UsrLength"
						},
						"validators": {
							"MinValueValidation": {
								"type": "mii.MinValueValidator",
								"params": {
									"minValue": 4,
									"message": "#ResourceString(LengthCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrCaptain_uu4gp48": {
						"modelConfig": {
							"path": "PDS.UsrCaptain"
						}
					},
					"PDS_UsrManager_tbe9n4w": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrCrewCount_uhnnvdx": {
						"modelConfig": {
							"path": "PDS.UsrCrewCount"
						}
					},
					"PDS_UsrDriveType_u5pkjr7": {
						"modelConfig": {
							"path": "PDS.UsrDriveType"
						}
					},
					"PDS_UsrPassengersCount_28kxzo8": {
						"modelConfig": {
							"path": "PDS.UsrPassengersCount"
						}
					},
					"PDS_UsrComment_yn23q5y": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrStatus_rjjq9bb": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"GridDetail_dh5d36t": {
						"isCollection": true,
						"modelConfig": {
							"path": "YachtRentalGridDetailDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrCustomer"
									}
								]
							},
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_bowhkgg_GridDetail_dh5d36t",
									"loadOnChange": true
								},
								{
									"name": "GridDetailSearchFilterYachtRental_GridDetail_dh5d36t",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"YachtRentalGridDetailDS_CreatedOn": {
									"modelConfig": {
										"path": "YachtRentalGridDetailDS.CreatedOn"
									}
								},
								"YachtRentalGridDetailDS_UsrRentalStart": {
									"modelConfig": {
										"path": "YachtRentalGridDetailDS.UsrRentalStart"
									}
								},
								"YachtRentalGridDetailDS_UsrRentalEnd": {
									"modelConfig": {
										"path": "YachtRentalGridDetailDS.UsrRentalEnd"
									}
								},
								"YachtRentalGridDetailDS_UsrTotalPrice": {
									"modelConfig": {
										"path": "YachtRentalGridDetailDS.UsrTotalPrice"
									}
								},
								"YachtRentalGridDetailDS_UsrManager": {
									"modelConfig": {
										"path": "YachtRentalGridDetailDS.UsrManager"
									}
								},
								"YachtRentalGridDetailDS_UsrCustomer": {
									"modelConfig": {
										"path": "YachtRentalGridDetailDS.UsrCustomer"
									}
								},
								"YachtRentalGridDetailDS_UsrComment": {
									"modelConfig": {
										"path": "YachtRentalGridDetailDS.UsrComment"
									}
								},
								"YachtRentalGridDetailDS_Id": {
									"modelConfig": {
										"path": "YachtRentalGridDetailDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"YachtRentalGridDetailDS": [
							{
								"attributePath": "UsrParentYacht",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrYacht"
						},
						"scope": "page"
					},
					"YachtRentalGridDetailDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrYachtRentals",
							"attributes": {
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"UsrRentalStart": {
									"path": "UsrRentalStart"
								},
								"UsrRentalEnd": {
									"path": "UsrRentalEnd"
								},
								"UsrTotalPrice": {
									"path": "UsrTotalPrice"
								},
								"UsrManager": {
									"path": "UsrManager"
								},
								"UsrCustomer": {
									"path": "UsrCustomer"
								},
								"UsrComment": {
									"path": "UsrComment"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			"mii.MinValueValidator":{
				validator: function (config){
					return function(control){
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value > minValue;
						var result;
						if (valueIsCorrect){
							result = null;
						} else {
							result = {
								"mii.MinValueValidator": {
									message: config.message
								}
							};
						};
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});