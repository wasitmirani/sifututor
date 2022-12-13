<template>
    <div class="card mb-4">
        <form class="card-body">
            <div class="row g-3 mb-4">
                <div class="col-md-6">
                    <label class="form-label" for="multicol-ClientCustomerId">ClientCustomerId</label>
                    <input type="text" id="multicol-ClientCustomerId" class="form-control"
                        placeholder="ClientCustomerId" />
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Status">Status</label>
                    <select id="multicol-Status" class="select2 form-select" data-allow-clear="true">
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        <option value="Pending">Pending</option>
                    </select>
                </div>
            </div>
            <h6>Personal Information </h6>
            <div class="row g-3">
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Fullname">Fullname</label>
                    <input type="text" id="multicol-Fullname" class="form-control" placeholder="Fullname" />
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Gender">Gender</label>
                    <select id="multicol-Gender" class="select2 form-select" data-allow-clear="true">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Fullname">Age</label>
                    <input type="number" id="multicol-Age" class="form-control" placeholder="Age" />
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Dob">Dob</label>
                    <input type="date" id="multicol-Dob" class="form-control" placeholder="Dob" />
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Nric">Nric</label>
                    <input type="text" id="multicol-Nric" class="form-control" placeholder="Nric" />
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
            </div>
            <hr class="my-4 mx-n4" />
            <h6>Address</h6>
            <div class="row g-3">
                <div class="col-md-6">
                    <label class="form-label" for="multicol-StreetAddress1">StreetAddress1</label>
                    <input type="text" id="multicol-StreetAddress1" class="form-control" placeholder="StreetAddress1" />
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-StreetAddress2">StreetAddress1</label>
                    <input type="text" id="multicol-StreetAddress2" class="form-control" placeholder="StreetAddress2" />
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-City">City</label>
                    <input type="text" id="multicol-City" class="form-control" placeholder="City" />
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-PostCode">PostCode</label>
                    <input type="text" id="multicol-PostCode" class="form-control" placeholder="PostCode" />
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
                            <textarea id="basic-icon-default-message" class="form-control"  placeholder="Remark"></textarea>
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
export default {
    name: "CustomerListFormComponent",
    data: () => ({
    }),
    mounted() {
    },
}
</script>