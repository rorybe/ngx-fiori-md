const { Storage } = require("@google-cloud/storage");

/**
 * Google Cloud Function to support the display 
 * of a current build status badge
 *
 * @param {object} event Google Cloud Functions event
 * @param {function} callback callback function for handling events
 */
exports.buildbadge = (event, callback) => {
    const pubsubMessage = event.data;
    if (pubsubMessage.data) {
        buildResource = JSON.parse(
            Buffer.from(pubsubMessage.data, "base64").toString()
        );
        repo = buildResource.source.repoSource.repoName === "github_rorybe_ngx-fiori-md";
        repoName = buildResource.source.repoSource.repoName;
        branch = buildResource.source.repoSource.branchName;
        status = buildResource.status;

        if (["master"].includes(branch)) {
            console.log("Creating badge for %s on branch %s", repoName, branch);
            const filename = "build/github_rorybe_ngx-fiori-md-" + branch + ".svg";
            console.log("Filename will be %s", filename);
            const storage = new Storage();

            if (repo && branch && status == "SUCCESS") {
                console.log("Detected build success!");
                storage
                    .bucket("fiori-ngx-master-detail.appspot.com")
                    .file("build/success.svg")
                    .copy(storage.bucket("fiori-ngx-master-detail.appspot.com").file(filename));
                console.log("Switched badge to build success");
                storage
                    .bucket("fiori-ngx-master-detail.appspot.com")
                    .file(filename)
                    .makePublic(function (err, apiResponse) { });
                console.log("Badge set to public");
            }
            if (repo && branch && status == "FAILURE") {
                console.log("Detected build failure!");
                storage
                    .bucket("fiori-ngx-master-detail.appspot.com")
                    .file("build/failure.svg")
                    .copy(storage.bucket("fiori-ngx-master-detail.appspot.com").file(filename));
                console.log("Switched badge to build failure");
                storage
                    .bucket("fiori-ngx-master-detail.appspot.com")
                    .file(filename)
                    .makePublic(function (err, apiResponse) { });
                console.log("Badge set to public");
            }
        }
    }
    callback();
};