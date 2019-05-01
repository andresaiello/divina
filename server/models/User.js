const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true }, // @todo: check how well mongoose unique works (probably not much)
    profilePic: { type: String }, // @todo set as required and set default profile pic
    name: { type: String },
    email: { type: String, required: true, unique: true }, // @todo: validate email
    birthdate: { type: String },
    gender: {
      type: String,
      enum: ['male', 'female', 'other', '-'],
    },
    description: { type: String },
    phone: { type: String },
    website: { type: String },
    instagram: { type: String },
  },
  { timestamps: true },
);

userSchema.statics.createFromAuth0 = async function createFromAuth0(data = {}) {
  const newUser = await this.create({
    username: data.nickname || mongoose.Types.ObjectId(),
    email: data.email || null,
    profilePic: data.picture || null,
    name: data.name || '',
    gender: data.gender || '-',
  });

  return newUser.toObject();
};

userSchema.statics.updateProfilePic = async function updateProfilePic({ _id, newUrl }) {
  try {
    const user = await this.findOneAndUpdate(
      { _id },
      {
        $set: {
          profilePic: newUrl,
        },
      },
      { new: true },
    );

    return user.toObject();
  } catch (e) {
    console.log(e);
    return null;
  }
};

userSchema.statics.editProfile = async function editProfile({ _id, profileInfo }) {
  try {
    const user = await this.findOneAndUpdate(
      { _id },
      {
        $set: {
          ...profileInfo,
        },
      },
      { new: true },
    );

    return user.toObject();
  } catch (e) {
    console.log(e);
    return null;
  }
};

userSchema.statics.findByEmail = async function findByEmail(email) {
  try {
    const [existingUser] = await this.find({ email }).lean();
    return existingUser;
  } catch (e) {
    console.log(e);
    return null;
  }
};

userSchema.statics.findByUsername = async function findByUsername(username) {
  try {
    const [existingUser] = await this.find({ username }).lean();
    return existingUser;
  } catch (e) {
    console.log(e);
    return null;
  }
};

userSchema.statics.findById = async function findById(_id) {
  try {
    const [existingUser] = await this.find({ _id }).lean();
    return existingUser;
  } catch (e) {
    console.log(e);
    return null;
  }
};

let User;

try {
  User = mongoose.model('User');
} catch (e) {
  User = mongoose.model('User', userSchema);
}

module.exports = User;
