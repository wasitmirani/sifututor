<template>
    <div class="card mb-4">
        <form class="card-body" v-on:submit.prevent="onSubmit">
            <div class="row g-3">
                <div class="col-md-4">
                    <label class="form-label" for="multicol-name">Tutor</label>
                    <multiselect v-model="report.tutor" :options="tutorList" track-by="id" label="name"
                        placeholder="Search by tutor name" :multiple="true">
                    </multiselect>
                    <validate-input :errors="errors?.errors" value="name"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-report_type">Report Type</label>
                    <select id="multicol-report_type"
                        :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'report_type')}`"
                        data-allow-clear="true" v-model="report.report_type">
                        <option value="evaluation_report">Evaluation Report</option>
                        <option value="attendance_report">Progressive/Attendance Report</option>
                    </select>
                    <validate-input :errors="errors?.errors" value="report_type"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-EstimateCommission">Student</label>
                    <multiselect v-model="report.student" :options="studentList" track-by="id" label="name"
                        placeholder="Search by student name" :multiple="true">
                    </multiselect>
                    <validate-input :errors="errors?.price" value="student"></validate-input>
                </div>
                <div class="col-md-6" v-if="report.report_type === 'evaluation_report'">
                    <label class="form-label" for="multicol-first_class_Date">First Class Date</label>
                    <input type="date" multiple="multiple"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'first_class_Date')}`"
                        placeholder="First Class Date" :v-model="report.first_class_Date">
                    <validate-input :errors="errors?.errors" value="first_class_Date"></validate-input>
                </div>
                <div class="col-md-6" v-if="report.report_type === 'evaluation_report'">
                    <label class="form-label" for="multicol-evaluation_forms">Evaluation Forms</label>
                    <input type="file" multiple="multiple"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'evaluation_forms')}`"
                        placeholder="Evaluation Forms" :v-model="report.evaluation_forms">
                    <small> Supported Extensions: doc,docx,pdf,jpg,jpeg,png,zip </small>
                    <validate-input :errors="errors?.errors" value="evaluation_forms"></validate-input>
                </div>

                <div class="col-md-6" v-if="report.report_type !== 'evaluation_report'">
                    <label class="form-label" for="multicol-month">Month</label>
                    <select id="multicol-month"
                        :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'month')}`"
                        data-allow-clear="true" v-model="report.month">
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                    </select>
                    <validate-input :errors="errors?.errors" value="month"></validate-input>
                </div>
                <div class="col-md-6" v-if="report.report_type !== 'evaluation_report'">
                    <label class="form-label" for="multicol-year">year</label>
                    <input type="number"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'year')}`"
                        placeholder="First Class Date" :v-model="report.year">
                    <validate-input :errors="errors?.errors" value="year"></validate-input>
                </div>
                <div class="col-md-6" v-if="report.report_type !== 'evaluation_report'">
                    <label class="form-label" for="multicol-progressive_forms">Progressive Form</label>
                    <input type="file" multiple="multiple"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'progressive_forms')}`" :v-model="report.progressive_forms">
                    <small> Supported Extensions: doc,docx,pdf,jpg,jpeg,png,zip </small>
                    <validate-input :errors="errors?.errors" value="progressive_forms"></validate-input>
                </div>
                <div class="col-md-6" v-if="report.report_type !== 'evaluation_report'">
                    <label class="form-label" for="multicol-attendance_forms">Attendance Forms</label>
                    <input type="file" multiple="multiple"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'attendance_forms')}`" :v-model="report.attendance_forms">
                    <small> Supported Extensions: doc,docx,pdf,jpg,jpeg,png,zip </small>
                    <validate-input :errors="errors?.errors" value="attendance_forms"></validate-input>
                </div>

                <div class="col-md-12"><label class="form-label" for="basic-icon-default-message">Remark</label>
                    <div class="input-group input-group-merge"><textarea rows="3" id="basic-icon-default-message"
                            :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'remark')}`"
                            placeholder="Remark" v-model="report.remark"></textarea></div>
                    <validate-input :errors="errors?.price" value="remark"></validate-input>
                </div>

            </div>
            <div class="pt-4">
                <button type="submit" class="btn btn-primary me-sm-3 me-1">Submit</button>
                <button type="reset" class="btn btn-label-secondary">Cancel</button>
            </div>
        </form>
    </div>
</template>
<script>
import ValidateInput from "../../../components/ValidateInputComponent.vue";
import Multiselect from 'vue-multiselect';
export default {
    name: "ReportForm",
    components: { ValidateInput, Multiselect },
    props: ['edit_mode', 'form'],
    data: () => ({
        report: {
            report_type: "evaluation_report",
        },
        errors: [],
        loading: false,
        studentList: [],
        tutorList: [
            {
                id: '1',
                name: '‘AFIFAH BINTI MOHD AMIN',
            },
            {
                id: '2',
                name: '‘umar Bin Faizel Amri'
            },
            {
                id: '3',
                name: 'Abdul Fattah Bin Haron'
            }
        ]
    }),
    methods: {
        getStudent() {
            axios.get('/student-list').then((res) => {
                this.studentList = res.data.students.map((item, index) => {
                    return { id: index, name: item.fullname }
                });
            }).catch((err) => {
                this.errors = err.response?.data;
                this.$root.alertNotify(err.response?.status, null, "error", err.response?.data);
            });
        },
        updateSubject(data) {
            axios.put('/tutor-report/' + this.report.id, data).then((res) => {
                this.$router.push('/tutor/tutor-reports');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        createSubject(data) {
            axios.post('/tutor-report', data).then((res) => {
                this.$router.push('/tutor/tutor-reports');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        onSubmit() {
            this.loading = true;
            let data = { ...this.report };
            if (!this.edit_mode) {
                this.createSubject(data);
            } else {
                this.updateSubject(data);
            }
            setTimeout(() => {
                this.loading = false;
            }, 1000);

        },
    },
    mounted() {
        this.getStudent();
        if (this.edit_mode) {
            // this.report = [];
            // this.report = this.form;
        }
    }
}
</script>
