<template>
  <div class="App">
    <div class="common-layout">
      <el-container class="container">
        <el-header>
          <el-row :gutter="24">
            <el-col :span="20" class="m-title">
              {{ $t("questionnaireTitle") }}
            </el-col>
            <el-col :span="4" align="right">
              <el-dropdown placement="bottom-end" @command="changeLanguage">
                <svg data-v-f414ea64="" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                  <path
                    fill="currentColor"
                    d="m18.5 10l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10h2zM10 2v2h6v2h-1.968a18.222 18.222 0 0 1-3.62 6.301a14.864 14.864 0 0 0 2.336 1.707l-.751 1.878A17.015 17.015 0 0 1 9 13.725a16.676 16.676 0 0 1-6.201 3.548l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18.078 18.078 0 0 1 4.767 8h2.24A16.032 16.032 0 0 0 9 10.877a16.165 16.165 0 0 0 2.91-4.876L2 6V4h6V2h2zm7.5 10.885L16.253 16h2.492L17.5 12.885z"
                  ></path>
                </svg>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item command="cn">{{
                      t("language_cn")
                    }}</el-dropdown-item>
                    <el-dropdown-item command="en">{{
                      t("language_en")
                    }}</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <div v-if="currentQuestion < totalQuestions">
            <template v-for="(question, index) in questions">
              <Question
                ref="questionRefs"
                v-show="index === currentQuestion"
                :question="question"
                :answer="answers[currentQuestion]"
                :index="currentQuestion"
                :total-questions="totalQuestions"
              />
            </template>
          </div>
          <el-result
            v-if="currentQuestion === totalQuestions"
            icon="success"
            :title="$t('success')"
            :sub-title="$t('thanks')"
          >
            <template #extra>
              <el-button text type="primary" @click="refreshPage">返回</el-button>
            </template></el-result
          >
          <ProgressBar
            :current="currentQuestion + 1"
            :total="totalQuestions"
            v-if="currentQuestion < questions.length"
          />
        </el-main>
        <el-footer v-if="currentQuestion < questions.length">
          <div class="questionnaire-buttons">
            <el-button text :disabled="currentQuestion === 0" @click="handlePrev">{{
              $t("prev")
            }}</el-button>
            <el-button
              text
              v-if="currentQuestion < questions.length - 1"
              @click="handleNext"
              >{{ $t("next") }}</el-button
            >
            <el-button text v-else type="primary" @click="handleNext">{{
              $t("submit")
            }}</el-button>
          </div>
        </el-footer>
      </el-container>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch, onMounted } from "vue";
import Question from "./components/Question.vue";
import ProgressBar from "./components/ProgressBar.vue";
import questions from "@/locales/questions.json";
import { useI18n } from "vue-i18n";
import { ArrowDown } from "@element-plus/icons-vue";

const { t, locale } = useI18n();
// 切换语言
const changeLanguage = (lang) => {
  locale.value = lang;
};
// 当前问题
const currentQuestion = ref(0);
// 总问题数
const totalQuestions = ref(questions.length);
// 答案
const answers = reactive({});
onMounted(() => {
  questions.map((item, index) => {
    answers[index] = item.answer;
  });
});
const questionRefs = ref(null);
/**
 * 下一步
 */
const handleNext = () => {
  // 验证当前问题的答案是否有效
  const isValid = questionRefs.value[currentQuestion.value].validateForm();
  if (questionRefs.value[currentQuestion.value].form.answer?.length > 0) {
    if (isValid) {
      answers[currentQuestion.value] =
        questionRefs.value[currentQuestion.value].form.answer;
      currentQuestion.value++;
    }
    if (currentQuestion.value === totalQuestions.value) {
      console.log("成功", JSON.stringify(answers, null, 2));
    }
  }
};
/**
 * 上一步
 */
const handlePrev = () => {
  currentQuestion.value--;
};
/**
 * 返回刷新页面
 */
const refreshPage = () => {
  location.replace(location.href);
};
</script>

<style scoped lang="scss">
.common-layout {
  height: 100vh;
  max-width: 600px;
  margin: 0 auto;
}
@media screen and (min-width: 768px) {
  .common-layout {
    height: auto;
  }
}
.container {
  height: 100%;
  margin: 0 auto;
}
.el-header {
  line-height: 60px;
  font-size: 20px;
  font-weight: bold;
  .m-title {
    font-size: 18px;
    font-weight: 400;
  }
  .el-dropdown {
    cursor: pointer;
  }
  .el-dropdown {
    vertical-align: middle;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
  }
}
.el-main {
  background-color: #f8f9fa;
}
.questionnaire-buttons {
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
}
</style>
