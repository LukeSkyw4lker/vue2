<template>
    <header>
      <head>
        <!-- 其他的标签和链接 -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </head>
        <div class="survey_box">
          <span>问题编写</span>
          <div class="survey_frame">
            <div class="survey_title">
              <span>问题标题：</span><input type="text" placeholder="单行输入" />
            </div>
            <div class="survey_text">
              <span>问题描述：</span
              ><textarea
                name=""
                id=""
                placeholder="多行输入"
                cols="80"
                rows="10"
                style="resize: none"
              ></textarea>
               <!-- 按钮 -->
              <div class="add-button">
                <i class="fas fa-plus"></i>
              </div>
            </div>
            <div class="survey_button">
              <button class="verify">确认发布</button><br />
              <button class="cancel">取消发布</button>
            </div>
          </div>
        </div>
      </header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.survey_box {
  margin: 35px auto;
  border: 1px solid;
  width: 1440px;
  height: 650px;
  line-height: 30px;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
}
.survey_frame {
  border: 1px solid;
  width: 1200px;
  height: 500px;
  margin: 43px auto;
}
.survey_title {
  margin: 50px 0;
  font-size: 20px;
  font-weight: 700;
  vertical-align: middle;
}
.survey_title input {
  vertical-align: middle;
  border: 1px solid;
  width: 592.8px;
  height: 40px;
}
.survey_text {
  font-size: 20px;
  font-weight: 700;
  vertical-align: text-top;
}
.survey_text textarea {
  vertical-align: text-top;
}
.survey_button {
  margin-top: 30px;
}
.survey_button button {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  width: 125px;
  height: 30px;
  margin: 20px;
  border: 1px solid;
  border-radius: 3px;
  cursor: pointer;
}
.verify {
  background: rgb(255, 255, 255);
}
.cancel {
  background: grey;
  color: white;
}

.add-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 24px;
  background-color: #ccc;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.add-button i {
  color: rgb(177, 31, 31)cc1;
}
</style>
