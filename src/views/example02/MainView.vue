<script lang="ts" setup>
import { listCourses, type Course } from './services'
import { ref, watch } from 'vue'

const requiredPoint = 12
const point = ref(0)
const c2 = listCourses().sort((a, b) => a.term - b.term)
const courses = ref<Course[]>(c2)
const courseSelects = ref<Course[]>([])
let percentage = 0
watch(courseSelects, () => {
  let count = 0
  courseSelects.value.forEach((c) => {
    count = count + c.point
  })
  point.value = count
  courseSelects.value.sort((a, b) => a.term - b.term)
  percentage = point.value / requiredPoint < 1 ? (point.value / requiredPoint) * 100 : 100
})

const customColorMethod = (percentage: number) => {
  if (percentage < 50) {
    return '#909399'
  }
  if (percentage < 100) {
    return '#e6a23c'
  }
  return '#67c23a'
}
</script>

<template>
  <el-row>
    <el-col :span="12">
      <p style="font-weight: bold">
        <span :style="{ color: point >= requiredPoint ? 'green' : 'red' }">
          {{ point }}
        </span>
        /{{ requiredPoint }}
      </p>
      <div style="width: 80%">
        <el-progress :percentage="percentage" :color="customColorMethod" :show-text="false" />
      </div>
      <template v-for="(course, index) of courses" :key="index">
        <el-checkbox v-model="courseSelects" :value="course">
          ({{ course.term }}) {{ course.name }} - {{ course.point }}
        </el-checkbox>
        <br />
      </template>
    </el-col>
    <el-col :span="12">
      <template v-for="(course, index) of courseSelects" :key="index">
        {{ course.name }} - {{ course.point }} ({{ course.term }})
        <br />
      </template>
    </el-col>
  </el-row>
</template>

<style scoped></style>
