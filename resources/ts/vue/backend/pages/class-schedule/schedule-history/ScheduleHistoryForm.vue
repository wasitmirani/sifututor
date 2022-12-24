<template>
    <div class="card mb-4">
        <form class="card-body" v-on:submit.prevent="onSubmit">
            <div class="row g-3">
                <div class="col-md-4">
                    <label class="form-label" for="multicol-name">Tutor</label>
                    <multiselect v-model="historyInfo.tutor" :options="tutorList" track-by="id" label="name"
                        placeholder="Search by tutor name" :multiple="true">
                    </multiselect>
                    <validate-input :errors="errors?.errors" value="name"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-date">Date</label>
                    <input type="date" id="multicol-date" placeholder="date" v-model="historyInfo.date"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'date')}`" />
                    <validate-input :errors="errors?.errors" value="date"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-Subject">Subject</label>
                    <multiselect v-model="historyInfo.subjects" :options="subjectList" :multiple="true"
                        group-values="subjects" group-label="category" :group-select="true" placeholder="Search by name"
                        track-by="name" label="name">
                        <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
                    </multiselect>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Start Time (24hrs format)">Start Time (24hrs format)</label>
                    <input type="time" id="multicol-Start Time (24hrs format)" placeholder="Start Time (24hrs format)"
                        v-model="historyInfo.start_time"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'start_time')}`" />
                    <validate-input :errors="errors?.errors" value="start_time"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-End Time (24hrs format)">End Time (24hrs format)</label>
                    <input type="time" id="multicol-End Time (24hrs format)" placeholder="End Time (24hrs format)"
                        v-model="historyInfo.end_time"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'start_time')}`" />
                    <validate-input :errors="errors?.errors" value="end_time"></validate-input>
                </div>
                <div class="col-sm-12">
                    <div class="form-check form-check-primary"><input class="form-check-input" type="checkbox"
                            id="customCheckPrimary" true-value="1" false-value="0"  v-model="historyInfo.has_incentive">
                        <label class="form-check-label" for="customCheckPrimary">Has Incentive</label>
                    </div>
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
import Multiselect from "vue-multiselect";

export default {
    name: "ScheduleHistoryForm",
    components: { ValidateInput },
    props: ['edit_mode', 'form'],
    data: () => ({
        historyInfo: {},
        errors: [],
        loading: false,
        subjectList: [],
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
        ],
    }),
    methods: {
        updateScheduleHistory(data) {
            axios.put('/schedule-history/' + this.historyInfo.id, data).then((res) => {
                // this.$router.push('/subject/subject-list');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        createScheduleHistory(data) {
            axios.post('/schedule-history', data).then((res) => {
                // this.$router.push('/subject/subject-list');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        onSubmit() {
            this.loading = true;
            let data = { ...this.historyInfo };
            if (!this.edit_mode) {
                this.createScheduleHistory(data);
            } else {
                this.updateScheduleHistory(data);
            }
            setTimeout(() => {
                this.loading = false;
            }, 1000);

        },
        getSubjectList() {
            axios.get('/subject-list').then((res) => {
                this.subjectList = res.data.subjects;
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
    },
    mounted() {
        this.getSubjectList();
        if (this.edit_mode) {
            // this.historyInfo = [];
            // this.historyInfo = this.form;
        }
    }
}
</script>
