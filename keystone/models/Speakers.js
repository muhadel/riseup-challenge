var keystone = require("keystone");
var Types = keystone.Field.Types;

/**
 * Speaker Model
 * ==========
 */

var Speaker = new keystone.List("Speaker");

Speaker.add({
	name: { type: Types.Name, required: true },

	email: { type: String },
	jobTitle: { type: String },
	bio: { type: String },

	twitterLink: { type: String },
	linkedinLink: { type: String },

	state: {
		type: Types.Select,
		options: "visible, hidden",
		default: "visible",
		index: true
	},
	author: { type: Types.Relationship, ref: "User", index: true },

	image: { type: Types.CloudinaryImage },
	speaker_image: {
		type: keystone.Field.Types.Url,
		noedit: true
	}
	// content: {
	// 	brief: { type: Types.Html, wysiwyg: true, height: 150 },
	// 	extended: { type: Types.Html, wysiwyg: true, height: 400 }
	// },
});

Speaker.schema.pre("save", function(next) {
	let newSpeaker = this;
	console.log("Speaker>>", newSpeaker);

	if (typeof newSpeaker.image.url != "undefined") {
		console.log("Yea image found", newSpeaker.image);
		this.speaker_image = newSpeaker.image.url;
	}
	return next();
});

Speaker.defaultColumns =
	"image|20%, name, jobTitle, email, state|20%, author|20%";
Speaker.register();
