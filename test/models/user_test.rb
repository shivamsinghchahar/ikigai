require "test_helper"

class UserTest < ActiveSupport::TestCase
  setup do
    @user = build :user
  end

  test "user should be valid" do
    assert @user.valid?
  end

  test "first name should be present" do
    @user.first_name = ""

    assert_not @user.valid?
    assert_equal ["can't be blank"], @user.errors[:first_name]
  end

  test "last name should be present" do
    @user.last_name = ""

    assert_not @user.valid?
    assert_equal ["can't be blank"], @user.errors[:last_name]
  end

  test "email should be present" do
    @user.email = ""

    assert_not @user.valid?
    assert_equal ["can't be blank", "is invalid"], @user.errors[:email]
  end

  test "first name should be of valid length" do
    @user.first_name = "a" * 51

    assert_not @user.valid?
    assert_equal ["is too long (maximum is 50 characters)"], @user.errors[:first_name]
  end

  test "last name should be of valid length" do
    @user.last_name = "a" * 51

    assert_not @user.valid?
    assert_equal ["is too long (maximum is 50 characters)"], @user.errors[:last_name]
  end

  test "email should be of valid length" do
    @user.email = "a" * 244 + "@example.com"

    assert_not @user.valid?
    assert_equal ["is too long (maximum is 255 characters)"], @user.errors[:email]
  end

  test "email should be unique" do
    @user.save
    new_user = build :user, email: @user.email.upcase

    assert_not new_user.valid?
    assert_equal ["has already been taken"], new_user.errors[:email]
  end

  test "email address should be saved as lowercase" do
    mixed_case_email = "Shivam@Gmail.COM"
    @user.email = mixed_case_email
    @user.save

    assert_equal mixed_case_email.downcase, @user.reload.email
  end

  test "email validation should accept valid addresses" do
    valid_addresses = %w[user@example.com USER@foo.COM A_US-ER@foo.bar.org first.last@foo.jp alice+bob@baz.cn]
    valid_addresses.each do |valid_address|
      @user.email = valid_address

      assert @user.valid?, "#{valid_address.inspect} should be valid"
    end
  end

  test "email validation should reject invalid addresses" do
    invalid_addresses = %w[user@example,com user_at_foo.org user.name@example. foo@bar_baz.com foo@bar+baz.com foo@bar..com]

    invalid_addresses.each do |invalid_address|
      @user.email = invalid_address

      assert_not @user.valid?, "#{invalid_address.inspect} should be invalid"
      assert_equal ["is invalid"], @user.errors[:email]
    end
  end

  test "password should be present (nonblank)" do
    @user.password = @user.password_confirmation = " " * 6

    assert_not @user.valid?
    assert_equal ["can't be blank"], @user.errors[:password]
  end

  test "password should have a minimum length" do
    @user.password = @user.password_confirmation = "a" * 5

    assert_not @user.valid?
    assert_equal ["is too short (minimum is 6 characters)"], @user.errors[:password]
  end

  test "password digest should be present" do
    @user.password_digest = ""

    assert_not @user.valid?
    assert_equal ["can't be blank"], @user.errors[:password]
  end
end
