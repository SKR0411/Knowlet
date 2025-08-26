const data = {
  semesters: [
    {
      name: "Semester 1",
      subjects: [
        {
          name: "Physics",
          papers: {
            DSM101: [
              { unit: "Unit 1: Quantities, Energy and Power", file: "assets/unit_1_dsm_101_physics.jpg" },
              { unit: "Unit 2: Gravity and Force", file: "assets/unit_2_dsm_101_physics.jpg" },
              { unit: "Unit 3: Commonly used appliances and devices", file: "assets/unit_3_dsm_101_physics.jpg" },
              { unit: "Unit 4: Vision, sound and radiation", file: "assets/unit_4_dsm_101_physics.jpg" },
              { unit: "Unit 5: Bio-imaging, Radiation effect on biological systems", file: "assets/unit_5_dsm_101_physics.jpg" }
            ],
            IDC101: [
              { unit: "Unit 1: Quantities, Energy and Power", file: "assets/unit_1_idc_101_physics.jpg" },
              { unit: "Unit 2: Gravity and Force", file: "assets/unit_2_idc_101_physics.jpg" },
              { unit: "Unit 3: Commonly used appliances and devices", file: "assets/unit_3_idc_101_physics.jpg" },
              { unit: "Unit 4: Vision, sound and radiation", file: "assets/unit_4_idc_101_physics.jpg" },
              { unit: "Unit 5: Bio-imaging, Radiation effect on biological systems", file: "assets/unit_5_idc_101_physics.jpg" }
            ]
          }
        },
        {
          name: "Chemistry",
          papers: {
            DSM101: [
              { unit: "Unit 1", file: "assets/unit_1_dsm_101_chemistry.jpg" },
              { unit: "Unit 2", file: "assets/unit_2_dsm_101_chemistry.jpg" },
              { unit: "Unit 3", file: "assets/unit_3_dsm_101_chemistry.jpg" },
              { unit: "Unit 4", file: "assets/unit_4_dsm_101_chemistry.jpg" },
              { unit: "Unit 5", file: "assets/unit_5_dsm_101_chemistry.jpg" }
            ],
            IDC101: [
              { unit: "Unit 1", file: "assets/unit_1_idc_101_chemistry.jpg" },
              { unit: "Unit 2", file: "assets/unit_2_idc_101_chemistry.jpg" },
              { unit: "Unit 3", file: "assets/unit_3_idc_101_chemistry.jpg" },
              { unit: "Unit 4", file: "assets/unit_4_idc_101_chemistry.jpg" },
              { unit: "Unit 5", file: "assets/unit_5_idc_101_chemistry.jpg" }
            ]
          }
        },
        {
          name: "Mathematics",
          papers: {
            DSC101:[
              { unit: "Unit 1", file: "assets/unit_1_dsc_101_mathematics.jpg"},
              { unit: "Unit 2", file: "assets/unit_2_dsc_101_mathematics.jpg" },
              { unit: "Unit 3", file: "assets/unit_3_dsc_101_mathematics.jpg" },
              { unit: "Unit 4", file: "assets/unit_4_dsc_101_mathematics.jpg" },
              { unit: "Unit 5", file: "assets/unit_5_dsc_101_mathematics.jpg" }
            ],
            DSC102: [
              { unit: "Unit 1", file: "assets/unit_1_dsc_102_mathematics.jpg" },
              { unit: "Unit 2", file: "assets/unit_2_dsc_102_mathematics.jpg" },
              { unit: "Unit 3", file: "assets/unit_3_dsc_102_mathematics.jpg" },
              { unit: "Unit 4", file: "assets/unit_4_dsc_102_mathematics.jpg" },
              { unit: "Unit 5", file: "assets/unit_5_dsc_102_mathematics.jpg" }
            ],
            DSM101: [
              { unit: "Unit 1", file: "assets/unit_1_dsm_102_mathematics.jpg" },
              { unit: "Unit 2", file: "assets/unit_2_dsm_102_mathematics.jpg" },
              { unit: "Unit 3", file: "assets/unit_3_dsm_102_mathematics.jpg" },
              { unit: "Unit 4", file: "assets/unit_4_dsm_102_mathematics.jpg" },
              { unit: "Unit 5", file: "assets/unit_5_dsm_102_mathematics.jpg" }
            ],
            SEC101: [
              { unit: "Unit 1", file: "assets/unit_1_sec_101_mathematics.jpg" },
              { unit: "Unit 2", file: "assets/unit_2_sec_101_mathematics.jpg" },
              { unit: "Unit 3", file: "assets/unit_3_sec_101_mathematics.jpg" },
              { unit: "Unit 4", file: "assets/unit_4_sec_101_mathematics.jpg" },
              { unit: "Unit 5", file: "assets/unit_5_sec_101_mathematics.jpg" }
            ],
            IDC101: [
              { unit: "Unit 1", file: "assets/unit_1_idc_101_mathematics.jpg" },
              { unit: "Unit 2", file: "assets/unit_2_idc_101_mathematics.jpg" },
              { unit: "Unit 3", file: "assets/unit_3_idc_101_mathematics.jpg" },
              { unit: "Unit 4", file: "assets/unit_4_idc_101_mathematics.jpg" },
              { unit: "Unit 5", file: "assets/unit_5_idc_101_mathematics.jpg" }
            ]
          }
        },
        {
          name: "Computer Science",
          papers: {
            DSM101: [
              { unit: "Unit 1", file: "assets/unit_1_dsm_101_computer_science.jpg" },
              { unit: "Unit 2", file: "assets/unit_2_dsm_101_computer_science.jpg" },
              { unit: "Unit 3", file: "assets/unit_3_dsm_101_computer_science.jpg" },
              { unit: "Unit 4", file: "assets/unit_4_dsm_101_computer_science.jpg" },
              { unit: "Unit 5", file: "assets/unit_5_dsm_101_computer_science.jpg" }
            ],
            IDC101: [
              { unit: "Unit 1", file: "assets/unit_1_idc_101_computer_science.jpg" },
              { unit: "Unit 2", file: "assets/unit_2_idc_101_computer_science.jpg" },
              { unit: "Unit 3", file: "assets/unit_3_idc_101_computer_science.jpg" },
              { unit: "Unit 4", file: "assets/unit_4_idc_101_computer_science.jpg" },
              { unit: "Unit 5", file: "assets/unit_5_idc_101_computer_science.jpg" }
            ]
          }
        },
        {
          name: "English",
          papers: {
            AEC: [
              { unit: "Unit 1: Grammar I", file: "assets/unit_1_aec_I_alt_english.jpg" },
              { unit: "Unit 2: Grammar II", file: "assets/unit_2_aec_I_alt_english.jpg" },
              { unit: "Unit 3: Poetry", file: "assets/unit_3_aec_I_alt_english.jpg" },
              { unit: "Unit 4: Short Stories", file: "assets/unit_4_aec_I_alt_english.jpg" },
              { unit: "Unit 5: Essays", file: "assets/unit_5_aec_I_alt_english.jpg" }
            ]
          }
        }
      ]
    }
  ]
};