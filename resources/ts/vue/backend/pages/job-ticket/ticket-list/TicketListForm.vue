<template>
    <div class="card mb-4">
        <form class="card-body">
            <div class="row g-3 mb-4">
                <div class="col-md-4 col-sm-12">
                    <label class="form-label" for="multicol-Register Date">Register Date</label>
                    <input type="date" id="multicol-Register Date" class="form-control" placeholder="Register Date" />
                </div>
                <div class="col-md-4 col-sm-12">
                    <label class="form-label" for="multicol-EstimateCommission">Estimate Commission</label>
                    <input type="text" id="multicol-EstimateCommission" class="form-control"
                        placeholder="Estimate Commission" />
                </div>
                <div class="col-md-4 col-sm-12">
                    <label class="form-label" for="multicol-AdmininCharge">Admin in Charge</label>
                    <select id="multicol-AdmininCharge" class="select2 form-select" data-allow-clear="true">
                        <option value="45"> Sorfina</option>
                        <option value="8">Fazira</option>
                        <option value="77">ADIB AZMI</option>
                        <option value="34">Aidid </option>
                        <option value="57">Alif Naquiddin</option>
                        <option value="24">Amin</option>
                        <option value="81">'Arisya Sofea </option>
                        <option value="83">Assayidatun Najihah </option>
                        <option value="74">AZFAHSHAZ ZULKEPLI</option>
                        <option value="62">Customer Service (Test)</option>
                        <option value="30">Faris</option>
                        <option value="47">Farisd</option>
                        <option value="13">Gaya</option>
                        <option value="3">Hafiz</option>
                        <option value="9">Haizuran</option>
                        <option value="61">Hariz Irfan</option>
                        <option value="10">Juliza</option>
                        <option value="21">Mas</option>
                        <option value="75">BADRUL HISYAM</option>
                        <option value="51">Najmy</option>
                        <option value="73">Afiq Noromi</option>
                        <option value="32">Firdaus</option>
                        <option value="2">Syamil</option>
                        <option value="53">Afif</option>
                        <option value="67">Monisha A/p Chandran</option>
                        <option value="14">Asyraf</option>
                        <option value="12">Ameer</option>
                        <option value="52">Amirul</option>
                        <option value="42">Azreen</option>
                        <option value="16">Harith</option>
                        <option value="59">HAZMAN SHAHRILL</option>
                        <option value="18">Imran</option>
                        <option value="41">Irfan</option>
                        <option value="36">KHAIRUL</option>
                        <option value="70">Muhammad Syafi Amin Bin Mohd Fadzil</option>
                        <option value="58">Syafiq Syazwan</option>
                        <option value="28">AREEP</option>
                        <option value="23">Husna</option>
                        <option value="40">Batrisyia</option>
                        <option value="26">Nazira</option>
                        <option value="38">EEZA</option>
                        <option value="72">Nor Asyiqin Binti Toni</option>
                        <option value="6">Nadia</option>
                        <option value="37">SHAHIRAH</option>
                        <option value="50">Shahirah</option>
                        <option value="19">Rina</option>
                        <option value="35">Fazira</option>
                        <option value="54">Syelis</option>
                        <option value="65">ATHIRAH SOLIHEN</option>
                        <option value="22">ATIRAH</option>
                        <option value="79">Fatihah Roslan</option>
                        <option value="5">Azera</option>
                        <option value="44">Hafizah</option>
                        <option value="43">AMIR</option>
                        <option value="20">Shahirah</option>
                        <option value="25">Suhaila</option>
                        <option value="1">Suziani</option>
                        <option value="69">Nur Syafiqah Radhuan</option>
                        <option value="55">Nurfatin Munirah Binti Mohd Azman</option>
                        <option value="76">Safwah Shaharin</option>
                        <option value="49">Nurizan</option>
                        <option value="64">Nurul Azuha Binti Nazmi</option>
                        <option value="60">Azwani Sulaiman</option>
                        <option value="82">Tehah</option>
                        <option value="68">Nurul Hasmida Azmi</option>
                        <option value="31">Syida</option>
                        <option value="39">Aqila</option>
                        <option value="71">QAISARAH</option>
                        <option value="80">Ros Nabilah</option>
                        <option value="27">Shafiqa</option>
                        <option value="33">Siti </option>
                        <option value="15">Syaza</option>
                        <option value="4">Adda</option>
                        <option value="29">Sitinor</option>
                        <option value="78">SYARIFAH</option>
                        <option value="11">Tutor Coordinator</option>
                        <option value="56">Wazeerah Azmi </option>
                        <option value="17">Izyan</option>
                        <option value="7">Zam</option>
                    </select>
                </div>
            </div>
            <h6 class="mb-0">Student Information</h6>
            <div class="row g-3 mb-3">
                <div class="col-md-6 col-sm-12">
                    <label class="form-label" for="multicol-EstimateCommission">Search Exising Student</label>
                    <multiselect v-model="student" :options="studentList" track-by="id" label="name"
                        placeholder="Search by student name" :multiple="true">
                    </multiselect>
                </div>
            </div>
            <div class="row g-3 mb-3" v-for="(item, index) in studentInfo" :key="index">
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Fullname">Fullname</label>
                    <input type="text" v-model="stdInfo[index].fullname" id="multicol-Fullname" class="form-control"
                        placeholder="Fullname" />
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Gender">Gender</label>
                    <select id="multicol-Gender" class="select2 form-select" data-allow-clear="true"
                        v-model="stdInfo[index].gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Fullname">Age</label>
                    <input type="number" id="multicol-Age" class="form-control" placeholder="Age"
                        v-model="studentInfo.age" />
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Dob">Date of Birth</label>
                    <input type="date" id="multicol-Dob" class="form-control" placeholder="Dob"
                        v-model="studentInfo.dob" />
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Nric">Nric</label>
                    <input type="text" id="multicol-Nric" class="form-control" placeholder="Nric"
                        v-model="studentInfo.nric" />
                </div>
                <div class="col-md-6 align-self-end text-end" v-if="index !== 0">
                    <button type="button" class="btn btn-danger" @click="removeStudent(index)"> <i
                            class="fa-solid fa-trash me-2"></i> Remove Student </button>
                </div>
            </div>
            <button type="button" class="btn btn-primary mt-3" @click="addStudent"> <i class="fa fa-plus me-2"></i> Add
                Student</button>

            <hr class="my-4 mx-n4" />
            <h6>Student Address</h6>
            <div class="row g-3">
                <div class="col-md-6">
                    <label class="form-label" for="multicol-StreetAddress1">Street Address 1</label>
                    <input type="text" id="multicol-StreetAddress1" class="form-control"
                        placeholder="Street Address 1" />
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-StreetAddress2">Street Address2</label>
                    <input type="text" id="multicol-StreetAddress2" class="form-control"
                        placeholder="Street Address 2" />
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-City">City</label>
                    <input type="text" id="multicol-City" class="form-control" placeholder="City" />
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-PostCode">PostCode</label>
                    <input type="text" id="multicol-PostCode" class="form-control" placeholder="PostCode" />
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Latitude">Latitude</label>
                    <input type="text" id="multicol-Latitude" class="form-control" placeholder="Latitude" />
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Longitude">Longitude</label>
                    <input type="text" id="multicol-Longitude" class="form-control" placeholder="Longitude" />
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="multicol-State">State</label>
                    <select id="multicol-State" class="select2 form-select" data-allow-clear="true">
                        <option value="">Select</option>
                        <option>Selangor</option>
                        <option>Penang</option>
                        <option>Johor</option>
                        <option>Kuala Lumpur</option>
                        <option>Negeri Sembilan</option>
                        <option>Melaka</option>
                        <option>Pahang</option>
                        <option>Perlis</option>
                        <option>Perak</option>
                        <option>Kedah</option>
                        <option>Terengganu</option>
                        <option>Kelantan</option>
                        <option>Serawak</option>
                        <option>Sabah</option>
                        <option>Putrajaya</option>
                    </select>
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="basic-icon-default-message">Remark</label>
                    <div class="input-group input-group-merge">
                        <textarea id="basic-icon-default-message" class="form-control" placeholder="Remark"></textarea>
                    </div>
                </div>
            </div>
            <hr class="my-4 mx-n4" />
            <h6>Customer Information</h6>
            <div class="row g-3">
                <div class="col-md-6">
                    <label class="form-label" for="multicol-FullName">FullName</label>
                    <input type="text" id="multicol-FullName" class="form-control" placeholder="FullName" />
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Gender">Gender</label>
                    <select id="multicol-Gender" class="select2 form-select" data-allow-clear="true">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div class="col-md-6"><label class="form-label" for="multicol-email">Email</label>
                    <div class="input-group input-group-merge"><input type="text" id="multicol-email"
                            class="form-control" placeholder="john.doe" aria-label="john.doe"
                            aria-describedby="multicol-email2"><span class="input-group-text"
                            id="multicol-email2">@example.com</span></div>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Phone-No">Phone No</label>
                    <input type="number" id="multicol-Phone-No" class="form-control" placeholder="Phone No" />
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Fullname">Age</label>
                    <input type="number" id="multicol-Age" class="form-control" placeholder="Age" />
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Dob">Date of Birth</label>
                    <input type="date" id="multicol-Dob" class="form-control" placeholder="Dob" />
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Nric">Nric</label>
                    <input type="text" id="multicol-Nric" class="form-control" placeholder="Nric" />
                </div>
            </div>
            <hr class="my-4 mx-n4" />
            <h6>Customer Address</h6>
            <div class="row g-3">
                <div class="col-md-6">
                    <label class="form-label" for="multicol-StreetAddress1">Street Address 1</label>
                    <input type="text" id="multicol-StreetAddress1" class="form-control"
                        placeholder="Street Address 1" />
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-StreetAddress2">Street Address 1</label>
                    <input type="text" id="multicol-StreetAddress2" class="form-control"
                        placeholder="Street Address 2" />
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-State">State</label>
                    <select id="multicol-State" class="select2 form-select" data-allow-clear="true">
                        <option value="">Select</option>
                        <option>Selangor</option>
                        <option>Penang</option>
                        <option>Johor</option>
                        <option>Kuala Lumpur</option>
                        <option>Negeri Sembilan</option>
                        <option>Melaka</option>
                        <option>Pahang</option>
                        <option>Perlis</option>
                        <option>Perak</option>
                        <option>Kedah</option>
                        <option>Terengganu</option>
                        <option>Kelantan</option>
                        <option>Serawak</option>
                        <option>Sabah</option>
                        <option>Putrajaya</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-City">City</label>
                    <select id="multicol-State" class="select2 form-select" data-allow-clear="true">
                        <option>Pulau Indah</option>
                        <option>Pulau Ketam</option>
                        <option>Puncak Alam</option>
                        <option>Rasa</option>
                        <option>Rawang</option>
                        <option>Sabak Bernam</option>
                        <option>Sekinchan</option>
                        <option>Semenyih</option>
                        <option>Sepang</option>
                        <option>Serdang</option>
                        <option>Serendah</option>
                        <option>Seri Kembangan</option>
                        <option>Shah Alam</option>
                        <option>Subang Jaya</option>
                        <option>Sungai Besar</option>
                        <option>Sungai Buloh</option>
                        <option>Sungai Pelek</option>
                        <option>Tanjong Karang</option>
                        <option>Tanjong Sepat</option>
                        <option>Telok Panglima Garang</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-PostCode">PostCode</label>
                    <input type="text" id="multicol-PostCode" class="form-control" placeholder="PostCode" />
                </div>
            </div>
            <hr class="my-4 mx-n4" />
            <h6>Commitment Fee</h6>
            <div class="row g-3">
                <small class="mt-0">RM 50 payment receipt is required to be uploaded for a new student
                    registration.</small>
                <div class="col-md-4 col-sm-12">
                    <label class="form-label" for="multicol-PaymentAttachment">Payment Attachment</label>
                    <input type="file" id="multicol-PaymentAttachment" class="form-control"
                        placeholder="Payment Attachment" />
                </div>
                <div class="col-md-4 col-sm-12">
                    <label class="form-label" for="multicol-PaymentDate">Fee Payment Date</label>
                    <input type="date" id="multicol-PaymentDate" class="form-control" placeholder="Fee Payment Date" />
                </div>
                <div class="col-md-4 col-sm-12">
                    <label class="form-label" for="multicol-ReceivingAccountId">Receiving Account</label>
                    <select id="multicol-ReceivingAccountId" class="select2 form-select" data-allow-clear="true">
                        <option value="45">Cash In Hand</option>
                        <option value="73">Payment Gateway - BillPlz Sdn Bhd</option>
                        <option value="76">Payment Gateway - Ipay88</option>
                        <option value="68">Public Bank</option>

                    </select>
                </div>
            </div>
            <hr class="my-4 mx-n4" />
            <h6>Subject Subscribes</h6>
            <div class="row g-3 mb-3" v-for="(item, index) in SubjectSubscribe" :key="index">
                <div class="col-md-2 col-sm-12">
                    <label class="form-label" for="multicol-Subject">Subject</label>
                    <input type="text" id="multicol-Subject" class="form-control" placeholder="Subject" />
                </div>
                <div class="col-md-2 col-sm-12">
                    <label class="form-label" for="multicol-Quantity">Quantity</label>
                    <input type="number" id="multicol-Quantity" class="form-control" placeholder="Quantity" min="0" />
                </div>
                <div class="col-md-2 col-sm-12">
                    <label class="form-label" for="multicol-Day">Day</label>
                    <select id="multicol-Day" class="select2 form-select" data-allow-clear="true">
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday </option>
                        <option value="Friday">Friday</option>
                        <option value="Weekday">Weekday</option>
                        <option value="Weekend">Weekend</option>
                    </select>
                </div>
                <div class="col-md-3 col-sm-12">
                    <label class="form-label" for="multicol-Time">Time (24hrs format)</label>
                    <input type="daye" id="multicol-Time" class="form-control" placeholder="Subject" />
                </div>
                <div class="col-md-3 col-sm-12 align-self-end text-end" v-if="index !== 0">
                    <button type="button" class="btn btn-danger" @click="removeSubjectSubscription(index)"> <i
                            class="fa-solid fa-trash me-2"></i> Remove Item </button>
                </div>
            </div>
            <button type="button" class="btn btn-primary mt-3" @click="addSubjectSubscription"> <i
                    class="fa fa-plus me-2"></i>
                Add Item</button>
            <div class="row g-3 mt-3">
                <div class="col-md-6">
                    <label class="form-label" for="multicol-SubscriptionDurationTerm">Subscription Duration Term</label>
                    <select id="multicol-SubscriptionDurationTerm" class="select2 form-select" data-allow-clear="true">
                        <option>Short Term</option>
                        <option>Long Term</option>
                    </select>
                </div>
            </div>
            <hr class="my-4 mx-n4" />
            <div>
                <button type="submit" class="btn btn-primary me-sm-3 me-1">Submit</button>
                <button type="reset" class="btn btn-label-secondary">Cancel</button>
            </div>
        </form>
    </div>
</template>
<script>
import Multiselect from 'vue-multiselect';
export default {
    name: "TicketListForm",
    components: { Multiselect },
    data: () => ({
        studentInfo: [{
            fullname: "",
            gender: "",
            age: "",
            dob: "",
            nric: "",
        }],
        stdInfo: [{}],
        errors: {},
        SubjectSubscribe: [{
            subject: "",
            quantity: "",
            day: "",
            time: "",
        }],
        subjectSub: [{}],
        studentList: [],
        student: [],
    }),
    methods: {
        addSubjectSubscription() {
            this.SubjectSubscribe.push({
                subject: "",
                quantity: "",
                day: "",
                time: "",
            });
            this.subjectSub.push({
                subject: "",
                quantity: "",
                day: "",
                time: "",
            })
        },
        removeSubjectSubscription(key) {
            this.SubjectSubscribe = this.SubjectSubscribe.filter((todo, index) => {
                return index !== key
            });
            this.subjectSub = this.subjectSub.filter((todo, index) => {
                return index !== key
            })
        },
        addStudent() {
            this.studentInfo.push({
                fullname: "",
                gender: "",
                age: "",
                dob: "",
                nric: "",
            })
            this.stdInfo.push({
                fullname: "",
                gender: "",
                age: "",
                dob: "",
                nric: "",
            })
        },
        removeStudent(key) {
            this.studentInfo = this.studentInfo.filter((todo, index) => {
                return index !== key
            });
            this.stdInfo = this.stdInfo.filter((todo, index) => {
                return index !== key
            })
        },
        getStudent() {
            axios.get('/student-list').then((res) => {
                this.studentList = res.data.students.map((item) => {
                    return { id: item.id, name: item.name }
                });
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
    },
    mounted() {
        this.getStudent();
        if (this.edit_mode) {
            // this.stdInfo = [];
            // this.stdInfo = this.form;
        }
    }
}
</script>