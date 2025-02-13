<template>
  <el-form :model="form" :rules="rules" ref="formRef">
    <p>{{ question.question }}</p>
    <el-card>
      <el-form-item v-if="question.type === 'radio'" prop="answer">
        <el-radio-group v-model="form.answer">
          <div>
            <el-radio
              v-for="option in question.options"
              :key="option.value"
              :label="option.label"
              :value="option.value"
              >{{ option.label }}</el-radio
            >
          </div>
        </el-radio-group>
      </el-form-item>
      <el-form-item v-if="question.type === 'checkbox'" prop="answer">
        <el-checkbox-group v-model="form.answer">
          <el-checkbox
            v-for="option in question.options"
            :key="option.value"
            :label="option.label"
            :value="option.value"
            >{{ option.label }}</el-checkbox
          >
        </el-checkbox-group>
      </el-form-item>
      <el-form-item v-if="question.type === 'input'" prop="answer">
        <el-input v-model="form.answer"></el-input>
      </el-form-item>
    </el-card>
  </el-form>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";

const props = defineProps({
  question: Object,
  answer: String | Array,
  index: Number,
  totalQuestions: Number,
});
const form = reactive({
  answer: props.answer,
});
onMounted(() => {
  form.answer = props.answer;
});
const rules = reactive({
  answer: props.question.rules,
});
onMounted(() => {
  rules.answer = props.question.rules;
});

const formRef = ref(null);
/**
 * 验证表单的函数
 * @returns {boolean} 如果表单验证通过返回 true，否则返回 false
 */
const validateForm = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      if (
        props.question.required &&
        ((["string"].includes(typeof form.answer) && form.answer.trim() === "") ||
          (Array.isArray(form.answer) && form.answer.length === 0))
      ) {
        return false;
      }
    }
  });
  return true;
};
defineExpose({
  formRef,
  // handleValidate,
  validateForm,
  form,
});
</script>

<style scoped lang="scss">
.el-card {
  margin: 60px 0;
  .el-radio,
  .el-checkbox {
    display: block;
  }
}
</style>
